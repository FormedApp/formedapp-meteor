Meteor.methods({
  'Organizations.insert': function (params) {
    var organizationAlreadyExist = Organizations.find({"name": params.name}, {limit: 1}).count()>0;

    if(organizationAlreadyExist === true) {
        throw new Meteor.Error(403, "organization already registered");
    }
    else {
        Organizations.insert(params);
    }
  },
  deleteOrganization: function (id) {
    check(id, String);

    var organization = Organizations.findOne(id);
    if (post.createdBy !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      Organizations.remove(id);
      return;
    } catch (exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  },
  removeOrganizationUserCount: function (id) {
    var orgCount = Organizations.findOne({_id: id}).usersCount;
    orgCount--;
    Organizations.update(id, {$set : { "usersCount" : orgCount }});
  },
  addOrganizationUserCount: function (id) {
    var orgCount = Organizations.findOne({_id: id}).usersCount;
    orgCount++;
    Organizations.update(id, {$set : { "usersCount" : orgCount }});
  },
  addGroupToOrganization: function (id) {
    var groupsCount = Organizations.findOne({_id: id}).groupsCount;
    groupsCount++;
    Organizations.update(id, {$set : { "groupsCount" : groupsCount }});
  }
});