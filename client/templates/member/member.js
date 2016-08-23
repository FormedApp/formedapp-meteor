Template.member.onCreated(function(){
    // Subscribe to our orgizations publications    
    Meteor.subscribe('users');
});

Template.member.rendered = function() {

};

Template.member.helpers({
	ifMemberExists: function() {
		// id from /member/id URL
		var memberId = this._id;
		var matchingMember = Meteor.users.findOne({_id: memberId});
		
		// check if group does exist
		if (!memberId == matchingMember._id) {
			return false;
		}

		return true;
	},
	ifCurrentUser: function() {
		return Meteor.userId();
	},
	member: function() {
		// grab group id from URL
		var memberId = this._id;
		return Meteor.users.findOne({_id: memberId});
	}
});
