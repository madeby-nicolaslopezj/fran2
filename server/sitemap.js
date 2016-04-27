sitemaps.add('/sitemap.xml', function() {

  var basicRoutes = ['home', 'about', 'contact', 'products.index'];

  var items = [];

  _.each(basicRoutes, function(routeName) {
    items.push({
      page: FlowRouter.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    });
  });

  Categories.find().forEach(function(category) {
    items.push({
      page: FlowRouter.path('work', category),
      lastmod: new Date(),
      changefreq: 'weekly',
    });

    Images.find({ categoryId: category._id }).forEach(function(image) {
      items.push({
        page: FlowRouter.path('work', { url: category.url, imageId: image._id }),
        lastmod: new Date(),
        changefreq: 'weekly',
      });
    });
  });

  Products.find().forEach(function(product) {
    items.push({
      page: FlowRouter.path('products.index', { productId: product._id }),
      lastmod: new Date(),
      changefreq: 'weekly',
    });
  });

  return items;
});
