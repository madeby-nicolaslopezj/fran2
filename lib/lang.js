getUserLanguage = function() {
  return 'es';
};

if (Meteor.isClient) {
  Meteor.startup(function() {
    //T9n.setLanguage(getUserLanguage());
    TAPi18n.setLanguage(getUserLanguage())
    .done(function() {

    })
    .fail(function(errorMessage) {
      console.log(errorMessage);
    });
  });

  /*T9n.map('es', {
    terms: 'Términos de uso',
    privacyPolicy: 'Política de Privacidad',
    clickAgree: 'Al hacer clic en registrarse aceptas la'
  });*/
}
