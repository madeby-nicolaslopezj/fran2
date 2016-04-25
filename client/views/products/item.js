Template.productsIndexItem.onCreated(function() {
  this.selectedImage = new ReactiveVar(null);
});

Template.productsIndexItem.onRendered(function() {
  Template.instance().selectedImage.set(this.data.images[0]);
});

Template.productsIndexItem.helpers({
  selectedImage: function() {
    return Template.instance().selectedImage.get();
  },
  isSelected: function() {
    const selected = Template.instance().selectedImage.get();
    return _.isEqual(selected, this);
  },
})

Template.productsIndexItem.events({
  'click .thumb-box': function(event, template) {
    template.selectedImage.set(this);
  },
});
