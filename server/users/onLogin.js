Accounts.onLogin(function(doc) {

    var userObject = doc.user;
    // record last login
    Meteor.users.update(userObject._id, { $set:{
        "profile.lastLogin": moment().format("MM/DD/YY hh:mm A")
    }});
});
