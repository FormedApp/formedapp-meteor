Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/user', {
  name: 'user'
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

Router.route('/signup', {
  name: 'entrySignUp'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','activity','journal']
});
