Organizations = new Mongo.Collection('organizations');

Organizations.helpers({

});

Organizations.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
