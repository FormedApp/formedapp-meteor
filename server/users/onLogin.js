Accounts.onLogin(function(doc) {

    var userObject = doc.user;
    
    // record last login
    Meteor.users.update(userObject._id, { $set:{
        "profile.lastLogin": moment().format("MM/DD/YY hh:mm A"),
    }});

    // If some users in the db do not have roles assigned (?).
    // This function will fix that for anyone without
    // roles previously assigned on account creation.
    if (!userObject.hasOwnProperty("roles")) {

        Roles.addUsersToRoles(userObject._id, ['user','leader']);
    }
    // ELSE omitted intentionally
    
    if (!userObject.profile.hasOwnProperty("organization")) {

        // record weird organization name
	    Meteor.users.update(userObject._id, { $set:{
	        "profile.organization": "somethingWeird-1234u237hnhup48hp4",
	    }});
    }
    if (!userObject.profile.hasOwnProperty("organizationId")) {

        var orgId = Organizations.findOne({name: userObject.profile.organization},{_id: 1});

        // record weird organization name
        Meteor.users.update(userObject._id, { $set:{
            "profile.organizationId": orgId._id,
        }});
    }
});
