publicRoutes = FlowRouter.group({
  name: "publicRoutes",
});

privateRoutes = FlowRouter.group({
  name : "privateRoutes",
});

publicRoutes.route('/', {
  name: 'Home',
  action: function() {
    ReactLayout.render(Homelayout,{})
  }
});

privateRoutes.route('/dashboard', {
  name: 'Dashboard',
  action: function() {
    ReactLayout.render(Layout, {
      sidebar: <div>sidebar</div>,
      content: <div>content</div>
    })
  }
});
