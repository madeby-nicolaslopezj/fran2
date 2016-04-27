Template.contact.onRendered(function() {
  Session.set('contactSent', false);
  this.autorun(function() {
    const baseURL = Meteor.absoluteUrl().slice(0, -1);
    setMeta({
      title: 'Contacto',
    });
  });
});

Template.contact.helpers({
  contactSent: function() {
    return Session.get('contactSent');
  },
});

AutoForm.addHooks('contactForm', {
  onSuccess: function(formType, result) {
    Session.set('contactSent', true);
  },
});
