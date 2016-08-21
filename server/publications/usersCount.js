// server: publish the current size of your post collection
Meteor.publish("usersCount", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Meteor.users.find().observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'usersCount', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'usersCount', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'usersCount', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});
