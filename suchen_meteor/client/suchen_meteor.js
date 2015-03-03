Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.body.helpers({
   // tasks: [
  //    { text: "This is task 1" },
    //  { text: "This is task 2" },
    //  { text: "This is task 3" }
   // ]
  });

  Template.tasksTemplate.helpers({
    //tasks : [{ text: "This is task 1" },
    //  { text: "This is task 2" },
    //  { text: "This is task 3" }]
    tasks : function(){
      var elements = Tasks.find().fetch();
      console.log("result " + JSON.stringify(elements));
      return elements;
    }

  });




  Template.addTask.events({
    'submit form': function(event){

        // Prevent the browser from applying default behaviour to the form
        event.preventDefault();

        // Get the value from the "task" text field
        taskVar = event.target.Task.value;

        // Call a Meteor method and pass through a name
        // console.log("insert " + taskVar);
        Meteor.call('insertTask', taskVar);
        var tasks = Tasks.find().fetch();
        for(i = 0; i<tasks.length; i++){
          console.log(i+ " "+ JSON.stringify(tasks[i]));
        }
    }
  });

  Template.body.events({
    'click': function(event){
      console.log("body event "+this.name+" "+ JSON.stringify(this));
    }
  });

  Template.task.events({
    'click': function(event){
      //   console.log("click event "+this.name+" "+ JSON.stringify(this));
      Session.set("selectedTaskName", this.name);
    },
    'mouseover': function(event){
      //    console.log("task mouseover event "+this.name+" "+ this.value +" "+ JSON.stringify(this));
      Session.set("mouseoverTaskName", this.name);
    }
  });

  Template.task.helpers({
    'selTask':function(){
      var shade = Session.get("mouseoverTaskName");
      var selected = Session.get("selectedTaskName");
      if(this.name == selected){
        return "selected";
      }
      if(this.name == shade){
        return "shade";
      }
    }
  });
}


