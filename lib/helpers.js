if (Meteor.isClient) {
  Template.registerHelper('formatMoney', function(number) {
    return numeral(number).format('$0,0');
  });

  Template.registerHelper('getFirst', function(items) {
    return items[0];
  });
}

setMeta = function({ title, description, image }) {
  const baseURL = Meteor.absoluteUrl().slice(0, -1);
  const seoTitle = orion.dictionary.get('seo.title');
  const seoDescription = orion.dictionary.get('seo.description');
  const finalTitle = title ? title + ' - ' + seoTitle : seoTitle;
  const finalDescription = description ? description + ' - ' + seoDescription : seoDescription;
  const finalImage = image || orion.dictionary.get('seo.image.url');

  DocHead.removeDocHeadAddedTags();

  DocHead.setTitle(finalTitle);
  DocHead.addLink({
    rel: 'icon',
    type: 'image/png',
    href: baseURL + orion.dictionary.get('seo.favicon.url'),
  });
  DocHead.addMeta({
    name: 'description',
    content: finalDescription,
  });
  DocHead.addMeta({
    name: 'og:title',
    content: finalTitle,
  });
  DocHead.addMeta({
    name: 'og:description',
    content: finalDescription,
  });
  DocHead.addMeta({
    name: 'og:image',
    content: baseURL + finalImage,
  });
  DocHead.addMeta({
    name: 'og:url',
    content: baseURL + FlowRouter.current().path,
  });
  DocHead.addMeta({
    name: 'twitter:title',
    content: finalTitle,
  });
  DocHead.addMeta({
    name: 'twitter:url',
    content: baseURL + FlowRouter.current().path,
  });
  DocHead.addMeta({
    name: 'twitter:description',
    content: finalDescription,
  });
  DocHead.addMeta({
    name: 'twitter:image',
    content: baseURL + finalImage,
  });
  DocHead.addMeta({
    name: 'theme-color',
    content: '#fbd8cf',
  });

};
