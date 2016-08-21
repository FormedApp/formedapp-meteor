// server: publish the current size of your organizations collection
Meteor.publish("organizationsCount", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Organizations.find().observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'organizationsCount', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'organizationsCount', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'organizationsCount', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});