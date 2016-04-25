ContactSchema = new SimpleSchema({
  productsIds: {
    type: String,
    optional: true,
    label: 'Productos',
  },
  name: {
    type: String,
    label: 'Nombre',
    max: 50,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'E-mail',
  },
  message: {
    type: String,
    label: 'Mensaje',
    max: 1000,
  },
});
