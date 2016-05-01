Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/activity', {
  name: 'activity'
});

Router.route('/community', {
  name: 'community'
});

Router.route('/journal', {
  name: 'journal'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','activity']
});
