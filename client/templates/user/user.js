// client: subscribe to the count for posts
Tracker.autorun(function () {
  
});

Template.user.rendered = function() {

};

Template.user.helpers({
	currentUserEmail: function() {
		return Meteor.user().emails[0].address;
	}
});
