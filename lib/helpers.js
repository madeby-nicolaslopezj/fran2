if (Meteor.isClient) {
  Template.registerHelper('formatMoney', function(number) {
    return numeral(number).format('$0,0');
  });

  Template.registerHelper('getFirst', function(items) {
    return items[0];
  });
}
