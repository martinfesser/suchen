entries = new Mongo.Collection('entries');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	  // Tasks.remove({});
    console.log("current tasks: " );
    var entriess = entries.find().fetch();
    for(i = 0; i<entriess.length; i++) {
      console.log(i+ " "+ JSON.stringify(entriess[i]));
    }

  });

  Meteor.methods({
    'insertEntry': function(entryName, entryValue) {

      console.log("tst " + entryName + " " + entryValue);

      // Get the ID of the current user
      var existing = entries.find({'entryName' : entryName});

      console.log("tst " + entryName + " " + entryValue + " " + existing.count());

      // TODO: not transactional afaik, how would/could I do that?
      if(existing.count() == 0) {
        // Insert the data of a new player
        var currentDate = new Date();

        entries.insert({
          entryName: entryName,
          entryValue: entryValue,
          create: currentDate,
          update: currentDate
        });
      }
    }
  });



}

