Meteor.publish("organizations", function () {
    return Organizations.find({});
});