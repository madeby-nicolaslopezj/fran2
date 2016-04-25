Images = new orion.collection('images', {
  pluralName: 'imagenes',
  singularName: 'imagen',
  title: 'Imagenes',
  link: {
    title: 'Imagenes',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Lugar' },
      { data: 'description', title: 'Descripción' },
      orion.attributeColumn('image', 'image', 'Imagen'),
      orion.attributeColumn('hasOne', 'categoryId', 'Categoría'),
    ],
  },
});

Images.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Lugar',
  },
  description: {
    type: String,
    label: 'Descripción',
  },
  image: orion.attribute('image', {
    label: 'Imagen',
  }),
  thumb: orion.attribute('image', {
    label: 'Fotito Chiquitita',
  }),
  categoryId: orion.attribute('hasOne', {
    label: 'Categoría',
  }, {
    collection: Categories,
    titleField: 'name',
    publicationName: 'images_categoryId_schema',
  }),
  createdAt: orion.attribute('createdAt'),
}));
