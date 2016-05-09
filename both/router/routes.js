//login rules
Router.onBeforeAction(function () {
   if (!Meteor.userId()) {
       Router.go("/");
   } else {
       this.next();
   }
},{
   // except: ['home']
   only: ['dashboard','activities','journal']
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

Router.route('/signup', {
  name: 'signUp'
});

Router.route('/create-group', {
  name: 'createGroup'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','activity','journal']
});
