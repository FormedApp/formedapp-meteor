// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("organizations");
  Meteor.subscribe('users');
  Meteor.subscribe('groups');
});

Template.listMyGroups.rendered = function() {

};

Template.listMyGroups.helpers({
	groups: function() {
		console.log(Groups.find({}));
		return Groups.find({organizationId: Meteor.user().profile.organizationId}, {sort:{ name: 1 }});
	},
	currentTeacherName: function() {
		// We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return Meteor.users.findOne(this.teacherId).profile.firstName;
	}
});
