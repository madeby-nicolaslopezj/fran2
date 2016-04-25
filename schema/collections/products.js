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
  images: orion.attribute('images', {
    label: 'Imagenes',
  }),
  createdAt: orion.attribute('createdAt'),
});
