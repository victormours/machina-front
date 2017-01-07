import Ember from 'ember';

export default Ember.Component.extend({
  archives: [Ember.Object.create({title: 'Une photo'})],

  actions: {
    add(){
      this
        .get('archives')
        .pushObject(Ember.Object.create({title: 'nouvelle archive'}));
    },
    delete(archive) {
      return this.get('archives').removeObject(archive);
    }
  }
});
