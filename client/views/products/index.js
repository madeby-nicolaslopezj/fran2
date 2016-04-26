Template.productsIndex.onCreated(function() {
  this.subscribe('products.all');
  Session.set('selectedProducts', []);
  this.selectedProduct = new ReactiveVar(null);
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
    return Session.get('selectedProducts');
  },
  isSelected: function() {
    const selected = Session.get('selectedProducts');
    return _.contains(selected, this);
  },
  selected: function() {
    return Products.findOne(Router.current().params.productId);
  },
  isSelectedThisIndex: function() {
    const selected = Products.findOne(Router.current().params.productId);
    if (!selected) {
      return false;
    }
    return this._id == selected._id;
  },
});

Template.productsIndex.events({
  'click .select-product': function(event, template) {
    if ($(event.target).hasClass('thumb-box') || $(event.target).hasClass('image-box')) {
      return;
    }
    if (Session.get('contactProductsSent')) {
      return;
    }
    const selected = Session.get('selectedProducts');
    if (_.contains(selected, this)) {
      Session.set('selectedProducts', _.without(selected, this));
    } else {
      Session.set('selectedProducts', _.union(selected, this));
    }
  },
  'click .open-product': function(event, template) {
    const selected = Products.findOne(Router.current().params.productId);
    if (_.isEqual(selected, this)) {
      Router.go('products.index', { productId: '' })
    } else {
      Router.go('products.index', { productId: this._id })
    }
  },
  'click .close': function() {
    Router.go('products.index', { productId: '' });
  },
})
