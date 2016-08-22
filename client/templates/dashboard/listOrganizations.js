// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("organizations");
  Meteor.subscribe('users');
});

Template.listOrganizations.rendered = function() {

};

Template.listOrganizations.helpers({
	organizations: function() {
		return Organizations.find({}, {sort:{ usersCount: -1 }});
	},
	currentLeaderName: function() {
		// We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return Meteor.users.findOne(this.createdBy).profile.firstName;
	},
	currentLeaderEmail: function() {
		// We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return Meteor.users.findOne(this.createdBy).emails[0].address;
	}
});
