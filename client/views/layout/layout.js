Template.layout.onCreated(function() {
  this.subscribe('categories');

  var gaScript = 'https://www.google-analytics.com/analytics.js';
  DocHead.loadScript(gaScript, function() {
    console.log('Google Analytics loaded');
    ga('create', Meteor.settings.public.ga.id, 'auto');
    ga('send', 'pageview');
  });
});

Template.layout.helpers({
  categories: function() {
    return Categories.find({}, { sort: { index: 1 } });
  },
  getCategoryPath: function() {
    return RouterLayer.pathFor('work', this);
  },
});
