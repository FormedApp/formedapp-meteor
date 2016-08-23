Template.group.onCreated(function(){
    // Subscribe to our orgizations publications
    Meteor.subscribe('groups');
    Meteor.subscribe('users');
});

Template.group.rendered = function() {

};

Template.group.helpers({
	groupName: function() {
		// get group's name that user has access to
		// url _id
		var groupId = this._id;
		return Groups.findOne({_id: groupId},{id: 1}).name;
	},
	usersCount: function() {
		// get group's name that user has access to
		// url _id
		var groupId = this._id;
		return Groups.findOne({_id: groupId},{id: 1}).usersCount;
	},
	ifGroupExists: function() {
		// id from /group URL
		var groupId = this._id;
		var matchingGroup = Groups.findOne({_id: groupId});
		
		// check if group does exist
		if (!groupId == matchingGroup._id) {
			return false;
		}

		return true;
	},
	ifCurrentUserOrganizationAndGroup: function() {
		// id from /group URL
		var groupId = this._id;
		var matchingGroup = Groups.findOne({_id: groupId},{_id: 1});

		// check if group does exist
		if (!groupId == matchingGroup._id) {
			return false;
		}

		// find matching group of currentUser
		if (!Meteor.users.findOne({"profile.groups":  groupId })) {
			return false;
		}

		// find matching organization of group and user
		var usersMatchingOrganizationId = Meteor.users.findOne().profile.organizationId;
		if (!usersMatchingOrganizationId == matchingGroup.organizationId) {
			return false;
		}

		return true;
	},
	ifCurrentUser: function() {
		return Meteor.userId();
	}
});
