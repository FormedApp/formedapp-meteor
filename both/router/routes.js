//login rules
Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    Router.go('/');
  } else {
    this.next();
  }
},{
// except: ['home','sign-up','sign-in']
only: ['dashboard','activities','journal','community','create-organization']
});

Router.route('/', {
  name: 'home',
  waitOn: function() {
    console.log('Route: home');
  }
});

Router.route('/dashboard', {
  name: 'dashboard',
  waitOn: function() {
    console.log('Route: dashboard');
  },
  controller: 'DashboardController'
});

Router.route('/profile', {
  name: 'profile',
  waitOn: function() {
    console.log('Route: profile');
  }
});

Router.route('/activities', {
  name: 'activities',
  waitOn: function() {
    console.log('Route: activities');
  }
});

Router.route('/community', {
  name: 'community',
  waitOn: function() {
    console.log('Route: community');
  }
});

Router.route('/journal', {
  name: 'journal',
  waitOn: function() {
    console.log('Route: journal');
  }
});

Router.route('/create-organization', {
  name: 'createOrganization',
  waitOn: function() {
    console.log('Route: createOrganization');
  }
});
Router.route('/create-group', {
  name: 'createGroup',
  waitOn: function() {
    console.log('Route: createGroup');
  }
});

Router.route('/group/:groupId', {
  name: 'group',
  waitOn: function() {
    var that = this;
    return Meteor.subscribe('groups');
    console.log('Route: group');
  },
  data: function () { 
    var groupId = this.params.groupId;
    var data = Groups.findOne({_id: groupId});
    if(data !== undefined) {
      return data ;
    }
    else {
      this.render('notFound');
    }
  }
});

Router.route('/group/:groupId/invite', {
  name: 'groupInvite',
  waitOn: function() {
    return Meteor.subscribe('groups');
    console.log('Route: groupInvite');
  },
  data: function () { 
    var groupId = this.params.groupId;
    var data = Groups.findOne({_id: groupId});
    if(data !== undefined) {
      return data ;
    }
    else {
      this.render('notFound');
    }
  }
});

Router.route('/member/:memberId', {
  name: 'member',
  waitOn: function() {
    return Meteor.subscribe('users');
    console.log('Route: member');
  },
  data: function () { 
    var memberId = this.params.memberId;
    var data = Meteor.users.findOne({_id: memberId});
    if(data !== undefined) {
      return data ;
    }
    else {
      this.render('notFound');
    }
  }
});

Router.route('/invite/:orgId', {
  name: 'invite',
  waitOn: function() {
    return Meteor.subscribe('organizations');
    console.log('Route: invite');
  },
  data: function () { 
    var orgid = this.params.orgId;
    var data = Organizations.findOne({_id: orgid});
    if(data !== undefined) {
      return data ;
    }
    else {
      this.render('notFound');
    }
  }
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','activities','journal','community','create-organization']
});
