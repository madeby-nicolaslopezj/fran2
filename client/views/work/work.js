var MathMap = function(x, a, b, c, d) {
  return (x - a) / (b - a) * (d - c) + c;
};

var isTouchDevice = function() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window; // Works on ie10
};

Template.work.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var category = Categories.findOne({ url: RouterLayer.getParam('url') });
    if (category) {
      self.subscribe('images.byCategory', category._id);
    }
  });
});

Template.work.onRendered(function() {
  $(document).keydown((e) => {
    if (e.keyCode == 39) {
      this.$('.carousel').carousel('next');
    } else if (e.keyCode == 37) {
      this.$('.carousel').carousel('prev');
    }
  });

  var self = this;
  self.autorun(function() {
    var ready = Template.instance().subscriptionsReady();
    if (!ready) {
      return;
    }

    const category = Categories.findOne({ url: RouterLayer.getParam('url') });
    if (category) {
      const imageId = FlowRouter.getParam('imageId');
      var query = { categoryId: category._id };
      if (imageId) {
        query = { _id: imageId };
      }
      const image = Images.findOne(query, { sort: { index: 1 } });
      Template.instance().activeId = image._id;
      setMeta({
        title: category.name,
        image: image.image.url,
        description: imageId ? image.description : '',
      });
    } else {
      setMeta({ title: 'No encontrado' });
    }

    Tracker.afterFlush(function() {
      var resizeItem = function() {
        var itemHeight = $(window).height() - $('.headersito').outerHeight() - $('.indicators').outerHeight() - 120;
        $('.imagensita').height(itemHeight);
      };
      resizeItem();
      $(window).resize(function() {
        resizeItem();
      });

      $(window).mousemove(function(e) {
        var posX = MathMap(e.pageX, 0, $(window).width(), 0, 100);
        var posY = MathMap(e.pageY, 0, $(window).height(), 0, 100);
        $('.zoom .imagensita').css('background-position', posX + '% ' + posY + '%');
      });
    });
  });
});


Template.work.helpers({
  category: function() {
    return Categories.findOne({ url: RouterLayer.getParam('url') });
  },
  images: function() {
    var category = Categories.findOne({ url: RouterLayer.getParam('url') });
    return category && Images.find({ categoryId: category._id }, { sort: { index: 1 } });
  },
  isFirst: function() {
    return Template.instance().activeId == this._id;
  },
});

Template.work.events({
  'click .item': function(event, template) {
    if (!isTouchDevice()) {
      $(event.currentTarget)
      .toggleClass('zoom')
      .find('.imagensita')
      .css('background-position', 'center');
    }
  },
  'slide.bs.carousel #carousel': function(event, template) {
    const imageId = $(event.relatedTarget).attr('data-id');
    FlowRouter.setParams({ imageId });
  },
});
