// server: publish the current size of your organizations collection
Meteor.publish("groupsCount", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  var handle = Groups.find().observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("stats", 'groupsCount', {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("stats", 'groupsCount', {count: count});
    }

  });

  initializing = false;
  self.added("stats", 'groupsCount', {count: count});
  self.ready();

  self.onStop(function () {
    handle.stop();
  });
});