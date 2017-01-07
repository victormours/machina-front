import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('episode');
  },

  actions: {
    add(){
      var episode = this.get('store').createRecord('episode', {title: 'Nouvel épisode'});
      episode.save();
    }
  }
});
