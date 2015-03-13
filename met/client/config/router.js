Router.configure({
  layoutTemplate: 'basicLayout'
});

Router.map( function() {
  this.route('create', 'createTab');
  this.route('update', 'updateTab');
  this.route('show', 'showTab');
});
