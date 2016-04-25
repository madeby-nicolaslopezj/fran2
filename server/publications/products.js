Meteor.publish('products.all', function() {
  return Products.find();
});
