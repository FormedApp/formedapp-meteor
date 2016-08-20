// client: subscribe to the count for posts
Tracker.autorun(function () {

});

Template.inviteRegisterForm.onCreated(function(){

});

Template.inviteRegisterForm.rendered = function() {

};

Template.inviteRegisterForm.helpers({
	organizationId: function() {
		return this._id;
	},
	organizationName: function() {
		var orgId = this._id;
		return Organizations.findOne({_id: orgId},{id: 1}).name;
	}
});

Template.inviteRegisterForm.events({
	'submit #register-form' : function(e, t) {
		e.preventDefault();
		// for login
		var email = t.find('#account-email').value;
		var password = t.find('#account-password').value;
		var firstName = t.find('#account-firstName').value;

		// Trim and validate the input
		var isValidPassword = function(val) {
     return val.length >= 6 ? true : false; 
	  }

		var options = {
		    email: t.find('#account-email').value,
		    password: t.find('#account-password').value,
		    services:[{password: t.find('#account-password').value}],
		    profile: {
		       organizationId: t.find('#account-organization-id').value,
		       organization: t.find('#account-organization-name').value,
		       firstName: t.find('#account-firstName').value
		    },
		};

		if (isValidPassword(password)) {
    	//create user if password validates
    	Meteor.call('createOrganizationUser', options, function (err, result) {
	      if (err) {
					// Inform the user that account creation failed
					Bert.alert( 'Error: Failed to create account. Error:' + err, 'danger' ); 
					console.log(err);
				} 
				else {
					// Success. Account has been created and the user
					// has logged in successfully.
					Bert.alert( 'Success: Welcome to Formed, ' + firstName + '! Your account has been created.', 'success' );
					// now login
					Meteor.loginWithPassword(email, password);
					// direct new user to different view
					Router.go('home');
				}
	    });	
	  }
	  else {
	  	Bert.alert( 'Error: Password needs to be longer.', 'danger' );
	  	// show password field is not valid
	  	$('#account-password').parent().addClass('has-error');
	  }

		return false;
	}
});
