Template.productsIndex.onCreated(function() {
  this.subscribe('products.all');
  this.selectedProducts = new ReactiveVar([]);
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
    const selected = template.selectedProducts.get();
    if (_.contains(selected, this)) {
      template.selectedProducts.set(_.without(selected, this));
    } else {
      template.selectedProducts.set(_.union(selected, this));
    }
  },
})
