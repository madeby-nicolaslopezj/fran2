Template.productsIndex.onCreated(function() {
  this.subscribe('products.all');
  this.selectedProducts = new ReactiveVar([]);
});

Template.productsIndex.onRendered(function() {
  this.autorun(function() {
    SEO.set({
      title: 'Venta - ' + orion.dictionary.get('seo.title'),
      link: {
        icon: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.favicon.url'),
      },
      meta: {
        description: orion.dictionary.get('seo.description'),
      },
      og: {
        title: 'Venta - ' + orion.dictionary.get('seo.title'),
        description: orion.dictionary.get('seo.description'),
        image: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.image.url'),
      },
    });
  });
});

Template.productsIndex.helpers({
  products: function() {
    return Products.find({}, { sort: { index: 1 } }).fetch();
  },
  selectedProducts: function() {
    return Template.instance().selectedProducts.get();
  },
  isSelected: function() {
    const selected = Template.instance().selectedProducts.get();
    return _.contains(selected, this);
  },
});

Template.productsIndex.events({
  'click .store-col': function(event, template) {
    if ($(event.target).hasClass('thumb-box')) {
      return;
    }
    if (Session.get('contactProductsSent')) {
      return;
    }
    const selected = template.selectedProducts.get();
    if (_.contains(selected, this)) {
      template.selectedProducts.set(_.without(selected, this));
    } else {
      template.selectedProducts.set(_.union(selected, this));
    }
  },
})
