Template.createOrganization.rendered = function() {

};

Template.createOrganization.events({
'submit .addOrganization':function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form elements
    const target = event.target;
    const organizationName = target.orgName.value;
    const user = Meteor.user();

    var errorState = false;

    // Insert a organization into the collection
    Organizations.insert({
      name: organizationName, //name must be unique (see server method)
      usersCount: 1, // first user
      groupsCount: 0,
      createdBy: Meteor.userId(),
      createdAt: new Date() // current time
    }, function( error, result) { 
      if ( error ) {
        // most likely fail because it already exists
        Bert.alert( 'Fail! '+ organizationName +' already exists.', 'danger' ); 
        console.log ( error ); //info about what went wrong
        errorState = true;
      }
      if ( result ) {
        Bert.alert( 'Success! '+ organizationName +' has been added as an organization.', 'success' );
        console.log ( result ); //the _id of new object if successful
        Router.go('/user');
        if (!errorState) {
          // update user
          Meteor.call('updateUserOrganizationId', result);
        }
      }
    });
 
    // Clear form
    target.orgName.value = '';
  },
});