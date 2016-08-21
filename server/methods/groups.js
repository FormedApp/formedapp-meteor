Meteor.methods({
  'Groups.insert': function (params) {
    var groupAlreadyExist = Groups.find({"name": params.name}, {limit: 1}).count()>0;

    if(groupAlreadyExist === true) {
        throw new Meteor.Error(403, "organization already registered");
    }
    else {
        Groups.insert(params);
    }
  },
  deleteGroups: function (id) {
    check(id, String);

    var group = Groups.findOne(id);
    if (group.createdBy !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      Groups.remove(id);
      return;
    } catch (exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  },
  removeOrganizationGroupsCount: function (id) {
    var groupsCount = Groups.findOne({_id: id}).groupsCount;
    groupsCount--;
    Groups.update(id, {$set : { "groupsCount" : groupsCount }});
  },
  addOrganizationGroupsCount: function (id) {
    var groupsCount = Groups.findOne({_id: id}).userCount;
    groupsCount++;
    Groups.update(id, {$set : { "groupsCount" : groupsCount }});
  }
});