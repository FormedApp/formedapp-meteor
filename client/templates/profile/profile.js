// client: subscribe to the count for posts
Tracker.autorun(function () {
  
});

Template.profile.onCreated(function(){
    // Subscribe to our Leaders organizations publication.
    this.subscribe('organizations');
});

Template.profile.rendered = function() {
	// see clipboard.js in index.html
	// idea source: https://wsvincent.com/clipboard-js-for-meteor/
	var clipboard = new Clipboard('.btn-copy-link');
};

Template.profile.helpers({
	currentUserEmail: function() {
		return Meteor.user().emails[0].address;
	},
	organizationUsersCount: function() {
		var orgId = Meteor.user().profile.organizationId;
		return Organizations.findOne({_id: orgId},{_id: 1}).usersCount;
	},
	organizationName: function() {
		var orgId = Meteor.user().profile.organizationId;
		return Organizations.findOne({_id: orgId},{_id: 1}).name;
	},
	organizationInviteLink: function() {
		// find organization
		var orgId = Meteor.user().profile.organizationId;
		// for heroku live site invite link
		var link = 'http://formed-meteor.herokuapp.com/invite/' + orgId;
		// for local testing invite link
		// var link = '/invite/' + orgId;
		return link;
	}
});

Template.profile.events({
'click .btn-copy-link':function(event) {
    // copied to clipboard message
    Bert.alert( '<strong><i class="fa fa-link"></i>&nbsp;&nbsp;Share it with the world!</strong> Your share link copied to your clipboard.', 'success' ); 
  },
});
