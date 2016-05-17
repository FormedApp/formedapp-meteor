// client: subscribe to the count for posts
Tracker.autorun(function () {
  
});

Template.user.onCreated(function(){
    // Subscribe to our Leaders organizations publication.
    this.subscribe('organizations');
});

Template.user.rendered = function() {

};

Template.user.helpers({
	currentUserEmail: function() {
		return Meteor.user().emails[0].address;
	},
	organizationInviteLink: function() {
		var orgName = Meteor.user().profile.organization;
		console.log(orgName);
		var orgId = Organizations.findOne({name: orgName},{_id: 1});
		orgId = orgId._id;
		var link = 'http://formed-meteor.herokuapp.com/invite/' + orgId;
		return link;
	}
});
