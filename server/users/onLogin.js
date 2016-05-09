Accounts.onLogin(function(doc) {

    var userObject = doc.user;
    // record last login
    Meteor.users.update(userObject._id, { $set:{
        "profile.lastLogin": moment().format("MM/DD/YY hh:mm A"),
    }});

    console.log(userObject.profile.group);

    if(user.profile.group == "something728307823723husdohfsd") {
        Router.go("/create-group");
    }
});
