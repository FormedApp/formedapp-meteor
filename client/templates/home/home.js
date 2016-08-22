Template.home.onCreated(function(){
    // Subscribe to our users publication.
    this.subscribe('posts');
});

Template.home.rendered = function() {
	if(Meteor.user().profile.organizationId === "somethingWeird-1234u237hnhup48hp4") {
		Router.go('/create-organization');
	}
};
Template.home.helpers({
	ifFirstPost: function() {
		if (Posts.find({createdBy: Meteor.userId() }).count() > 0) {
			return false;
		} else {
			return true;
		}
	}
});
