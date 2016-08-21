Meteor.methods({
  updateUserOrganizationName: function(organizationName) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { "profile.organization" : organizationName }});
  },
	createOrganizationUser: function(options) {
    Accounts.createUser( options );
    Meteor.call("addOrganizationUserCount", options.profile.organizationId);
  }

});