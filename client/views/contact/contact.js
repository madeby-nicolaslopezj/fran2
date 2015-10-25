Template.contact.onRendered(function() {
  Session.set('contactSent', false);
  this.autorun(function() {
    SEO.set({
  		title: 'Contacto - ' + orion.dictionary.get('seo.title'),
  		link: {
  			icon: orion.dictionary.get('seo.favicon.url'),
  		},
  		meta: {
  			'description': orion.dictionary.get('seo.description')
  		},
  		og: {
  			'title': 'Contacto - ' + orion.dictionary.get('seo.title'),
  			'description': orion.dictionary.get('seo.description'),
  			'image': orion.dictionary.get('seo.image.url')
  		}
  	});
  });
});

Template.contact.helpers({
  contactSent: function () {
    return Session.get('contactSent');
  }
});

AutoForm.addHooks('contactForm', {
  onSuccess: function(formType, result) {
    Session.set('contactSent', true);
  },
});
