Template.invite.onCreated(function(){
    // Subscribe to our orgizations publications
    // this.subscribe('organizations');
});

Template.invite.rendered = function() {

};

Template.invite.helpers({
	ifOrganizationExists: function() {
		console.log(this);
		var orgId = this._id;
		if (orgId !== null || orgId !== undefined) {
			return true;
		} else {
			return false;
		}
	}
});
