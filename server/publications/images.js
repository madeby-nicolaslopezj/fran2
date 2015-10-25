Meteor.publish('images.byCategory', function(categoryId) {
  check(categoryId, String);
  return Images.find({ categoryId: categoryId });
});
