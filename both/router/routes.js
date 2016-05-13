//login rules
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    Router.go('/');
  } else {
    this.next();
  }
},{
// except: ['home','sign-up','sign-in']
only: ['dashboard','activities','journal','community','create-organization']
});

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

Router.route('/activities', {
  name: 'activities'
});

Router.route('/community', {
  name: 'community'
});

Router.route('/journal', {
  name: 'journal'
});

Router.route('/create-organization', {
  name: 'createOrganization'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','activity','journal']
});
