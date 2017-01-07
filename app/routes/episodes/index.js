import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('episode');
  },

  actions: {
    add(){
      var newEpisode = {
        title: 'Nouvel épisode'
      };
      var episode = this.get('store').createRecord('episode', newEpisode);
      episode.save();
    }
  }
});
