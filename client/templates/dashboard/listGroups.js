// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("organizations");
  Meteor.subscribe('users');
  Meteor.subscribe('groups');
});

Template.listGroups.rendered = function() {

};

Template.listGroups.helpers({
	groups: function() {
		console.log(Groups.find({}));
		return Groups.find({}, {sort:{ usersCount: -1 }});
	},
	currentTeacherName: function() {
		// We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return Meteor.users.findOne(this.teacherId).profile.firstName;
	},
	organizationName: function() {
		// We use this helper inside the {{#each posts}} loop, so the context
    // will be a post object. Thus, we can use this.authorId.
    return Organizations.findOne(this.organizationId).name;
	}
});
