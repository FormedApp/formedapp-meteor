Template.journal.onCreated(function(){
    // Subscribe to our users publication.
    this.subscribe('posts');
});

Template.journal.rendered = function() {

};

Template.journal.helpers({
  posts: function(){
      // Show newest posts at the top
      var getPosts = Posts.find({createdBy: Meteor.userId() }, { sort: { createdAt: -1 } });

      if (getPosts) {
          return getPosts;
      } else {
          return false;
      }
  },
  formattedDate: function(){
    return moment(this.createdAt).fromNow()
  }
});

Template.journal.events({
  
});