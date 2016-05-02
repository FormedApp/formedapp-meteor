// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("postCounts");
  Meteor.subscribe("userCounts");
  Meteor.subscribe("postTodayCounts");
});

Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
	postsCount: function(){
		var postsCount = Stats.findOne({_id: "postCounts"})
		return postsCount.count
	},
	usersCount: function(){
		var usersCount = Stats.findOne({_id: "userCounts"})
		return usersCount.count
	},
	postsTodayCount: function(){
		var usersCount = Stats.findOne({_id: "postTodayCounts"})
		return usersCount.count
	}
});
