Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	  // Tasks.remove({});
    console.log("current tasks: " );
    var tasks = Tasks.find().fetch();
    for(i = 0; i<tasks.length; i++){
      console.log(i+ " "+ JSON.stringify(tasks[i]));
    }

  });

  Meteor.methods({
    'insertTask': function(taskVar){
      // Get the ID of the current user
      //var currentUserId = Meteor.userId();
      var existing = Tasks.find({name : taskVar});

      // not transactional afaik
      if(existing.count() == 0){
        // Insert the data of a new player
        Tasks.insert({
            name: taskVar
        });
      }

      console.log("insert " + taskVar+ " "+ Tasks.find().count());
      var tasks = Tasks.find().fetch();
      for(i = 0; i<tasks.length; i++){
        console.log(i+ " "+ JSON.stringify(tasks[i]));
      }
    }

  });



}

