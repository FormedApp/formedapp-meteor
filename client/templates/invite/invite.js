Template.invite.onCreated(function(){
    // Subscribe to our orgizations publications
    // this.subscribe('organizations');
});

Template.invite.rendered = function() {

};

Template.invite.helpers({
	ifOrganizationExists: function() {
		var orgId = this._id;
		if (orgId !== null || orgId !== undefined) {
			return true;
		} else {
			return false;
		}
	},
	ifCurrentUser: function() {
		return Meteor.userId();
	}
});
