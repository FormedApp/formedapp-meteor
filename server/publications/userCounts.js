// server: publish the current size of your post collection
Meteor.publish("userCounts", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Meteor.users.find().observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'userCounts', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'userCounts', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'userCounts', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});
