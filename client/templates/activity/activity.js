Template.activity.rendered = function() {

};

Template.activity.events({
'submit .new-post':function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Posts.insert({
      text: text,
      createdBy: Meteor.userId(),
      createdAt: new Date() // current time
    });
 
    // Clear form
    target.text.value = '';
    // Router.go('/community');
    Bert.alert({
	  title: 'Post Added',
	  message: 'It worked!',
	  type: 'success',
	  style: 'growl-top-right'
	});
  },
});