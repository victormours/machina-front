import Ember from 'ember';

export default Ember.Component.extend({
  archives: [Ember.Object.create({title: 'Une photo'})],

  actions: {
    add: function(){
      this
        .get('archives')
        .pushObject(Ember.Object.create({title: 'nouvelle archive'}));
    }
  }
});
