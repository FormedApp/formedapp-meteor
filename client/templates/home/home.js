Template.home.onCreated(function(){
    // Subscribe to our users publication.
    this.subscribe('posts');
});

Template.home.rendered = function() {

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
