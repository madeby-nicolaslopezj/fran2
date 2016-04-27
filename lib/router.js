FlowRouter.triggers.enter([function() {
  if (!window.ga) {
    return;
  }
  console.log('sending pageview', FlowRouter.current().path);
  ga('send', {
    hitType: 'pageview',
    page: FlowRouter.current().path,
  });

  fbq('track', 'PageView');
},]);
