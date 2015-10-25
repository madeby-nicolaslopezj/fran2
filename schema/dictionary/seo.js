orion.dictionary.addDefinition('title', 'seo', {
	type: String,
	label: 'Título de la página',
});

orion.dictionary.addDefinition('description', 'seo', {
	type: String,
	label: 'Description',
	optional: true,
	autoform: {
		type: 'textarea',
	}
});

orion.dictionary.addDefinition('image', 'seo',
	orion.attribute('image', {
    label: 'Image',
  	optional: true
  })
);

orion.dictionary.addDefinition('favicon', 'seo',
	orion.attribute('image', {
    label: 'Fav Icon',
  	optional: true
  })
);
