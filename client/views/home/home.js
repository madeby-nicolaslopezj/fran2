Template.home.onRendered(function() {
	this.autorun(function() {
		SEO.set({
			title: orion.dictionary.get('seo.title'),
			link: {
				icon: Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.favicon.url'),
			},
			meta: {
				'description': orion.dictionary.get('seo.description')
			},
			og: {
				'title': orion.dictionary.get('seo.title'),
				'description': orion.dictionary.get('seo.description'),
				'image': Meteor.absoluteUrl().slice(0, -1) + orion.dictionary.get('seo.image.url')
			}
		});
	});
});
