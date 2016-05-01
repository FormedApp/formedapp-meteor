// server: publish the current size of your post collection
Meteor.publish("postCounts", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Posts.find().observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'postCounts', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'postCounts', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'postCounts', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});
