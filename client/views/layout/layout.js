Template.layout.onCreated(function() {
  this.subscribe('categories');
});

Template.layout.helpers({
  categories: function() {
    return Categories.find({}, { sort: { index: 1 } });
  },
  getCategoryPath: function() {
    return RouterLayer.pathFor('work', this);
  },
});
