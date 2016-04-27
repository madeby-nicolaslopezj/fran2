var gaScript = 'https://www.google-analytics.com/analytics.js';
DocHead.loadScript(gaScript, function() {
  console.log('Google Analytics loaded');
  ga('create', Meteor.settings.public.ga.id, 'auto');
  ga('send', 'pageview');
});

/*
var fbScript = 'https://connect.facebook.net/en_US/fbevents.js';
DocHead.loadScript(fbScript, function() {
  console.log('Facebook pixel loaded');
  fbq('init', Meteor.settings.public.fb.id);
  fbq('track', 'PageView');
});
*/
