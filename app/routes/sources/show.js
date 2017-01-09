import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('source', params.source_id);
  },

  actions: {
    save(source){
      source.save();
    }
  }

});
