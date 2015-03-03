entries = new Mongo.Collection('entries');

if (Meteor.isClient) {

  Template.entryTemplate.helpers({
    entries : function(){
      var elements = entries.find().fetch();
      // console.log("result " + JSON.stringify(elements));
      return elements;
    }

  });

  Template.addEntry.events({
    'submit form': function(event){
      // Prevent the browser from applying default behaviour to the form
      event.preventDefault();

      // Get the value from the "task" text field
      var entryName = event.target.entryName.value;
      var entryValue = event.target.entryValue.value;

      console.log("tst " + entryName + " " + entryValue);


      // Call a Meteor method and pass through a name
      Meteor.call('insertEntry', entryName, entryValue);
    }
  });

  Template.entry.events({
    'click': function(event){
      // console.log("click event " + this._id + " " + this.name);
      Session.set("selectedEntryId", this._id);
    },
    'mouseover': function(event){
      // console.log("task mouseover event " + this._id + " " + this.entryName);
      Session.set("mouseoverEntryId", this._id);
    }
  });

  Template.entry.helpers({
    'selectEntry':function(){
      var shade = Session.get("mouseoverEntryId");
      var selected = Session.get("selectedEntryId");
      if(this._id == selected){
        return "selected";
      }
      if(this._id == shade){
        return "shade";
      }
    }
  });
}


