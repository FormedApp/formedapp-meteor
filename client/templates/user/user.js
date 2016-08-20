// client: subscribe to the count for posts
Tracker.autorun(function () {
  
});

Template.user.onCreated(function(){
    // Subscribe to our Leaders organizations publication.
    this.subscribe('organizations');
});

Template.user.rendered = function() {
	// see clipboard.js in index.html
	// idea source: https://wsvincent.com/clipboard-js-for-meteor/
	var clipboard = new Clipboard('.btn-copy-link');
};

Template.user.helpers({
	currentUserEmail: function() {
		return Meteor.user().emails[0].address;
	},
	organizationInviteLink: function() {
		var orgName = Meteor.user().profile.organization;
		// find organization
		var orgId = Organizations.findOne({name: orgName},{_id: 1});
		// grab just the  orginization _id
		orgId = orgId._id;
		// for heroku live site invite link
		var link = 'http://formed-meteor.herokuapp.com/invite/' + orgId;
		// for local testing invite link
		// var link = '/invite/' + orgId;
		return link;
	}
});

Template.user.events({
'click .btn-copy-link':function(event) {
    // copied to clipboard message
    Bert.alert( '<strong><i class="fa fa-link"></i>&nbsp;&nbsp;Share it with the world!</strong> Your share link copied to your clipboard.', 'success' ); 
  },
});
