Template.createGroup.rendered = function() {

};

Template.createGroup.events({
'submit .addGroup':function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form elements
    const target = event.target;
    const groupName = target.groupName.value;
    const user = Meteor.user();

    var errorState = false;

    // Insert a organization into the collection
    Groups.insert({
      name: groupName, //name must be unique (see server method)
      userCount: 1, // first user
      createdBy: Meteor.userId(),
      createdByName: user.profile.firstName,
      createdByEmail: user.emails[0].address,
      teacherId: Meteor.userId(),
      teacherName: user.profile.firstName,
      organizationName: user.profile.organizationName,
      createdAt: new Date() // current time
    }, function( error, result) { 
      if ( error ) {
        // most likely failed because it already exists
        Bert.alert( 'Fail! '+ groupName +' already exists.', 'danger' ); 
        console.log ( error ); //info about what went wrong
        errorState = true;
      }
      if ( result ) {
        Bert.alert( 'Success! '+ groupName +' has been added as a new group.', 'success' );
        console.log ( result ); //the _id of new object if successful
        Router.go('/user');
      }
    });

    if (!errorState) {
      // update user
      Meteor.call('updateGroupName', groupName);
    }
 
    // Clear form
    target.orgName.value = '';
  },
});