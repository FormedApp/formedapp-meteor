Meteor.methods({
  'Posts.insert': function (params) {
    Posts.insert(params);
  },
  deletePost: function (id) {
    check(id, String);

    var post = Posts.findOne(id);

    if (post.createdBy !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      Posts.remove(id);
      return;
    } catch (exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  },
  setPrivate: function (id, private) {
    check(id, String);
    check(private, Boolean);
    var post = Posts.findOne(id);

    if (post.createdBy !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    try {
      Posts.update(id, {
        $set: {
          private: private
        }
      });
      return;
    } catch (exception) {
      // If an error occurs, return it to the client.
      return exception;
    }
  }
});