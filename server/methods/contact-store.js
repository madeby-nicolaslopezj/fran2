function nl2br(str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
String.prototype.escape = function() {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  return nl2br(this.replace(/[&<>]/g, function(tag) {
    return tagsToReplace[tag] || tag;
  }));
};

Meteor.methods({
  sendContactStore: function(doc) {
    check(doc, ContactSchema);

    var productsPart = '';
    if (doc.productsIds) {
      productsPart += '<br><br><br>Le interesa:<br><br>';
      const baseUrl = FlowRouter.url('home');
      Products.find({ _id: { $in: doc.productsIds.split(',') } }).forEach(product => {
        const imageUrl = product.images[0].url.substring(1);
        productsPart += `
        <img src="${baseUrl}${imageUrl}" height="120"/>
        `;
      });
    }

    var html = `
    <b>${doc.name}</b><br><b>${doc.email}</b><br><br>${doc.message.escape()}
    ${productsPart}
    `;

    Meteor.defer(function() {
      Email.send({
        to: 'franciscainfantelorca@gmail.com',
        from: 'Página Francisca Infante <franciscainfantelorca@gmail.com>',
        subject: 'Contacto Francisca Infante',
        replyTo: doc.email,
        html: html,
      });
    });
  },
});
