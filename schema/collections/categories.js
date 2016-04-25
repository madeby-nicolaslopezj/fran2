Categories = new orion.collection('categories', {
  pluralName: 'categorías',
  singularName: 'categoría',
  title: 'Categorías',
  link: {
    title: 'Categorías',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Lugar' },
      { data: 'name', title: 'Nombre' },
    ],
  },
});

Categories.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Lugar',
  },
  name: {
    type: String,
    label: 'Nombre',
  },
  url: {
    type: String,
    label: 'URL',
    unique: true,
  },
  createdAt: orion.attribute('createdAt'),
}));
