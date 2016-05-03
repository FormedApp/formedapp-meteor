/*
 * Controller: Post
 * Template: post.html
 */

Template.post.onCreated(function(){
    // Subscribe to our users publication.
    this.subscribe('posts');
});

Template.post.helpers({
  isAuthor: function () {
    return this.createdBy === Meteor.userId();
  },
  author: function(){
    return this.createdByName;
  },
  privateState: function() {
    if (this.private) {
      return 'eye-slash';
    } else {
      return 'eye';
    }
  },
  formattedDate: function(){
    return moment(this.createdAt).fromNow()
  }
});

Template.post.events({
  'click .toggle-private': function () {
    Meteor.call('setPrivate', this._id, !this.private);
  },
  'click .delete-post': function () {
    Meteor.call("deletePost", this._id, function (err, result) {
      if (!err) {
        console.log("meteor call to remove job was good");
        Bert.alert("Poof! Post deleted.", "success");
      } else {
        Bert.alert("Rrrrr. No worky.  " + err.reason + "  " + result, "danger");
        console.log("meteor call was bad", err);
      }
    });
  }
});