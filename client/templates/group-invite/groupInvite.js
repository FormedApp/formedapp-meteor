Template.groupInvite.onCreated(function(){
		// Subscribe to our orgizations publications
		this.subscribe('organizations');
		this.subscribe('groups');
		this.subscribe('users');
});

Template.groupInvite.rendered = function() {

};

Template.groupInvite.helpers({
	group: function() {
		var groupId = this._id;
		return Groups.findOne({_id: groupId},{id: 1});
	},
	organization: function() {
		var groupId = this._id;
		var orgId = Groups.findOne({_id: groupId},{id: 1}).organizationId;
		return Organizations.findOne({_id: orgId},{id: 1});
	},
	organizationLeaders: function() {
		var groupId = this._id;
		var orgId = Groups.findOne({_id: groupId},{id: 1}).organizationId;
		var leaders = Organizations.findOne({_id: orgId},{id: 1}).leaders;
		var leaders = leaders.slice(0, leaders.length - 1).join(', ') + ", and " + leaders.slice(-1);
		return leaders;
	},
	ifGroupExists: function() {
		// id from groupInvite URL
		var groupId = this._id;
		console.log(groupId);
		if (groupId !== null || groupId !== undefined) {
			return true;
		}
		else {
			return false;
		}
	},
	ifCurrentUserGroup: function() {
		// id from groupInvite URL
		var groupId = this._id;

		// find organization of currentUser
		var usersGroups = Meteor.user().profile.groups;

		var inGroup = false;
		for (i = 0; i < usersGroups.length; i++) {
			if (usersGroups[i] == groupId) {
				inGroup = true;
				break;
			}
		}

		if (inGroup) {
			return true;
		}
		else {
			return false;
		}
	},
	ifCurrentUser: function() {
		return Meteor.userId();
	}
});
