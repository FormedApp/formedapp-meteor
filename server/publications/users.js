Meteor.publish("users", function () {
    return Meteor.users.find({},{ _id: 1, profile: 1, emails: 1 });
});
