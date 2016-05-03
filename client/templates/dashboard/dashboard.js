// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("postCounts");
  Meteor.subscribe("userCounts");
  Meteor.subscribe("postTodayCounts");
  Meteor.subscribe("postWeekCounts");
  Meteor.subscribe("postMonthCounts");
});

Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
	usersCount: function(){
		var usersCount = Stats.findOne({_id: "userCounts"})
		return usersCount.count
	},
	postsCount: function(){
		var postsCount = Stats.findOne({_id: "postCounts"})
		return postsCount.count
	}
});
