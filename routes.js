Router.configure({
  trackPageView: true
});

Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout'
});

Router.route('/contacto', {
	name: 'contact',
	layoutTemplate: 'layout'
});

Router.route('/about', {
	name: 'about',
	layoutTemplate: 'layout'
});

Router.route('/:url', {
	name: 'work',
	layoutTemplate: 'layout'
});
