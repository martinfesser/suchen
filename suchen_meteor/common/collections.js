entries = new Mongo.Collection('entries');
entries.attachSchema(new SimpleSchema({
  entryName: {
    type: String,
    label: "Name",
    max: 80
  },
  entryValue: {
    type: String,
    label: "Value"
  },
  create: {
    type: Date,
    label: "Creation date"
    // optional: true
  },
  update: {
    type: Date,
    label: "Update date"
    // optional: true
  }
}));