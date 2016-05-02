Template.home.rendered = function() {

};
Template.home.helpers({
	ifFirstPost: function() {
		console.log(Posts.find({createdBy: Meteor.userId() }).count());
		if (Posts.find({createdBy: Meteor.userId() }).count() == 0) {
			return true;
		} else {
			return false
		}
	}
});
