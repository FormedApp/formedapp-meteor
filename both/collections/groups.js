Groups = new Mongo.Collection('groups');

Groups.helpers({

});

Groups.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
