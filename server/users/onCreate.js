Accounts.onCreateUser(function(options, user) {
    if (options.profile)
        user.profile = options.profile;
    return user;
      
    var userObject = user;

    Meteor.users.update(userObject._id, { $set:{
        "profile.group": "something728307823723husdohfsd"
    }});

    Roles.addUsersToRoles(user._id, ['user','leader']);
    return user;
});