Template.invite.onCreated(function(){
    // Subscribe to our orgizations publications
    // this.subscribe('organizations');
});

Template.invite.rendered = function() {

};

Template.invite.helpers({
	organizationName: function() {
		// get organizations name that user has been invited to
		// url _id
		var orgId = this._id;
		return Organizations.findOne({_id: orgId},{id: 1}).name;
	},
	ifOrganizationExists: function() {
		// id from invite URL
		var orgId = this._id;
		if (orgId !== null || orgId !== undefined) {
			return true;
		} 
		else {
			return false;
		}
	},
	ifCurrentUserOrganization: function() {
		// id from invite URL
		var orgId = this._id;
		
		// find organization of currentUser
		var usersOrgId = Meteor.user().profile.organizationId;

		if (orgId == usersOrgId._id) {
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
