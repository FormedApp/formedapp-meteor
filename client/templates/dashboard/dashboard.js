// client: subscribe to the count for posts
Tracker.autorun(function () {
  Meteor.subscribe("postsCount");
  Meteor.subscribe("usersCount");
  // Meteor.subscribe("postTodayCounts");
  // Meteor.subscribe("postWeekCounts");
  // Meteor.subscribe("postMonthCounts");
  Meteor.subscribe("organizationsCount");
  Meteor.subscribe("organizations");
  Meteor.subscribe("groupsCount");
  Meteor.subscribe("groups");
});

Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
	usersCount: function() {
		return Stats.findOne({_id: "usersCount"}).count;
	},
	postsCount: function() {
		return Stats.findOne({_id: "postsCount"}).count;
	},
	organizationsCount: function() {
		return Stats.findOne({_id: "organizationsCount"}).count;
	},
	organizations: function() {
		return Organizations.find({}, {sort:{ userCount: -1 }});
	},
	groupsCount: function() {
		return Stats.findOne({_id: "groupsCount"}).count;
	},
	groups: function() {
		return Groups.find({}, {sort:{ groupCount: -1 }});
	}
});
