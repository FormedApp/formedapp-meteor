Meteor.methods({
  updateUserOrganizationName: function(organizationName) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { "profile.organization" : organizationName }});
  }
});