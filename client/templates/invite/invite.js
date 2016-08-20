Template.invite.onCreated(function(){
    // Subscribe to our orgizations publications
    // this.subscribe('organizations');
});

Template.invite.rendered = function() {

};

Template.invite.helpers({
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
		var orgName = Meteor.user().profile.organization;
		var usersOrgId = Organizations.findOne({name: orgName},{_id: 1});
		
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
