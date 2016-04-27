Template.productsIndex.onCreated(function() {
  this.subscribe('products.all');
  Session.set('selectedProducts', []);
  this.selectedProduct = new ReactiveVar(null);
});

Template.productsIndex.onRendered(function() {
  this.autorun(function() {

    const productId = FlowRouter.getParam('productId');
    if (productId) {
      const product = Products.findOne(productId, { sort: { index: 1 } });
      if (!product) {
        return setMeta({
          title: 'Venta',
        });
      }
      setMeta({
        title: 'Venta',
        image: product.images[0].url,
        description: product.description + ' ' + product.size,
      });
    } else {
      setMeta({
        title: 'Venta',
      });
    }
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
    return !!_.findWhere(selected, { _id: this._id });
  },
  selected: function() {
    return Products.findOne(RouterLayer.getParam('productId'));
  },
  isSelectedThisIndex: function() {
    const selected = Products.findOne(RouterLayer.getParam('productId'));
    if (!selected) {
      return false;
    }
    return this._id == selected._id;
  },
});

Template.productsIndex.events({
  'click .select-product': function(event, template) {
    /*If ($(event.target).hasClass('thumb-box') || $(event.target).hasClass('image-box')) {
      return;
    }
    if (Session.get('contactProductsSent')) {
      return;
    }
    const selected = Session.get('selectedProducts');
    if (_.findWhere(selected, { _id: this._id })) {
      Session.set('selectedProducts', _.without(selected, this));
    } else {
      Session.set('selectedProducts', _.union(selected, this));
    }*/
  },
  'click .open-product': function(event, template) {
    const selected = Products.findOne(RouterLayer.getParam('productId'));
    if (_.isEqual(selected, this)) {
      RouterLayer.go('products.index', { productId: '' })
    } else {
      RouterLayer.go('products.index', { productId: this._id })
    }
  },
  'click .close': function() {
    RouterLayer.go('products.index', { productId: '' });
  },
})
