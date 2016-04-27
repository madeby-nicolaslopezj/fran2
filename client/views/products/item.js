Template.productsIndexItem.onCreated(function() {
  this.selectedImage = new ReactiveVar(null);
});

Template.productsIndexItem.onRendered(function() {
  const instance = Template.instance();
  instance.selectedImage.set(this.data.images[0]);

  $(document).keydown((e) => {
    if (e.keyCode == 27) {
      return RouterLayer.go('products.index', { productId: '' });
    }
    const selected = instance.selectedImage.get();
    const currentIndex = this.data.images.indexOf(selected);
    var nextIndex = 0;
    if (e.keyCode == 39) {
      nextIndex = currentIndex + 1;
      if (nextIndex == this.data.images.length) {
        nextIndex = 0;
      }
    } else if (e.keyCode == 37) {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = this.data.images.length - 1;
      }
    }
    instance.selectedImage.set(this.data.images[nextIndex]);
  });
});

Template.productsIndexItem.helpers({
  selectedImage: function() {
    return Template.instance().selectedImage.get();
  },
  isSelected: function() {
    const selected = Template.instance().selectedImage.get();
    return _.isEqual(selected, this);
  },
  isSelectedItem: function() {
    const selected = Session.get('selectedProducts');
    return !!_.findWhere(selected, { _id: this._id });
  },
})

Template.productsIndexItem.events({
  'click .thumb-box': function(event, template) {
    template.selectedImage.set(this);
  },
  'click .show-image-box': function(event, template) {
    const image = template.selectedImage.get();
    window.open(image.url);
  },
  'click .btn-select': function(event, template) {
    const selected = Session.get('selectedProducts');
    const item = _.findWhere(selected, { _id: this._id });
    if (item) {
      Session.set('selectedProducts', _.without(selected, item));
    } else {
      Session.set('selectedProducts', _.union(selected, this));
    }
  },
});


const selected = Session.get('selectedProducts');
if (_.contains(selected, this)) {
  Session.set('selectedProducts', _.without(selected, this));
} else {
  Session.set('selectedProducts', _.union(selected, this));
}
