// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe('users');
  Meteor.subscribe('groups');
});

Template.listGroupMembers.rendered = function() {

};

Template.listGroupMembers.helpers({
	members: function() {
		// grab group id from URL
		var groupId = this._id;
		return Meteor.users.find();
	}
});
