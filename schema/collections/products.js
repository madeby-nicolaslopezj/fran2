Products = new orion.collection('products', {
  pluralName: 'items',
  singularName: 'item',
  title: 'Venta',
  link: {
    title: 'Venta',
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Lugar' },
      orion.attributeColumn('images', 'images', 'Imagenes'),
      {
        data: 'isLandscape',
        title: 'Es horizontal',
        render: val => val ? 'Si' : 'No',
      },
    ],
  },
});

Products.attachSchema({
  index: {
    type: Number,
    label: 'Lugar',
  },
  description: {
    type: String,
    label: 'Descripción',
  },
  size: {
    type: String,
    label: 'Tamaño',
  },
  price: {
    type: Number,
    label: 'Precio (solo numeros)',
  },
  isLandscape: {
    type: Boolean,
    label: 'Es horizontal',
    optional: true,
  },
  images: orion.attribute('images', {
    label: 'Imagenes',
  }),
  createdAt: orion.attribute('createdAt'),
});
