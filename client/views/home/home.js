Template.home.onRendered(function() {
  this.autorun(function() {
    const baseURL = Meteor.absoluteUrl().slice(0, -1);
    setMeta({});
  });
});
