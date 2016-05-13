Template.community.onCreated(function(){
    // Subscribe to our users publication.
    this.subscribe('posts');
});

Template.community.rendered = function() {

};

Template.community.helpers({
  posts: function(){
      // Show newest posts at the top
      var getPosts = Posts.find({private: false, organization: Meteor.user().profile.organization}, { sort: { createdAt: -1 } });

      if (getPosts) {
          return getPosts;
      } else {
          return false;
      }
  }
});