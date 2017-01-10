import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    autoComplete(sourceName) {
      this.get('store').findAll('source').then((sources) => {

        this.set('sources', sources);
      });
    },
    setSource(source) {
      this.set('selectedSource', source);
      var archive = this.get('archive');
      archive.set('source', source);
      archive.save();
    }
  }
});
