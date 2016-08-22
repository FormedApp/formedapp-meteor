Meteor.methods({
  updateUserOrganizationId: function(organizationId) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { "profile.organizationId" : organizationId }});
  },
	createOrganizationUser: function(options) {
    Accounts.createUser( options );
    Meteor.call("addOrganizationUserCount", options.profile.organizationId);
  },
  addUserToGroup: function(groupdId) {
    if(this.userId)
      Meteor.users.update(this.userId, {$addToSet : { "profile.groups" : groupdId }});
  },
  removeUserFromGroup: function(groupdId) {
    if(this.userId)
      Meteor.users.update(this.userId, {$pull : { "profile.groups" : groupdId }});
  }

});