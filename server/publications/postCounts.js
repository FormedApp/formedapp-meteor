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

// server: publish the current size of your post collection additions for today
Meteor.publish("postTodayCounts", function () {
  var self = this;
  var count = 0;
  var initializing = true;
  var today = new Date();

  var handle = Posts.find({createdAt: {$gte: today}}).observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'postTodayCounts', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'postTodayCounts', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'postTodayCounts', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});
