Template.productsContact.onRendered(function() {
  Session.set('contactProductsSent', false);
});

Template.productsContact.helpers({
  contactSent: function() {
    return Session.get('contactProductsSent');
  },
  getProducts: function() {
    return this.products.map(product => product._id).join(',');
  },
});

AutoForm.addHooks('contactProductsForm', {
  onSuccess: function(formType, result) {
    Session.set('contactProductsSent', true);
    ga('send', 'event', 'contacto', 'contacto-venta');
    fbq('track', 'Lead');
  },
});
