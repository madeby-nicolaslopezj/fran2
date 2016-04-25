sitemaps.add('/sitemap.xml', function () {

  var basicRoutes = ['home', 'about', 'contact'];

  var items = [];

  _.each(basicRoutes, function (routeName) {
    items.push({
      page: Router.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    });
  });

  Categories.find().forEach(function (category) {
    items.push({
      page: Router.path('work', category),
      lastmod: new Date(),
      changefreq: 'weekly',
    });
  });

  return items;
});
