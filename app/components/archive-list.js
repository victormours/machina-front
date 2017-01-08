import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  didReceiveAttrs() {
    this._super(...arguments);
    this.get('subject').get('archives').then((archives) => {
      this.set('archives', archives);
    });
  },

  actions: {
    add(){
      var newArchive = { title: 'Une archive', subject: this.get('subject') };
      var archive = this.get('store').createRecord('archive', newArchive);
      archive.save();
    },
    delete(archive) {
      archive.destroyRecord();
    }
  }
});
