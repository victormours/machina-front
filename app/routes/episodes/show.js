import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('episode', params.episode_id);
  },

  actions: {
    addSubject(episode){
      var newSubject = {
        episode: episode,
        title: 'Nouveau sujet',
      };
      var subject = this.get('store').createRecord('subject', newSubject);
      subject.save();
    },
    save(episode){
      episode.save();
      episode.get('subjects').then((subjects) => {
        subjects.forEach((subject) => {
          subject.save();
        });
      });

    }
  }

});
