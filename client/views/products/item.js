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
  isSelectedItem: function() {
    const selected = Session.get('selectedProducts');
    return !!_.findWhere(selected, { _id: this._id });
  },
})

Template.productsIndexItem.events({
  'click .thumb-box': function(event, template) {
    template.selectedImage.set(this);
  },
  'click .image-box': function(event, template) {
    const image = template.selectedImage.get();
    window.open(image.url);
  },
  'change input[type=checkbox]': function(event, template) {
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
