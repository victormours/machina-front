import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('source');
  },

  actions: {
    add(){
      var newSource = {
        name: 'Nouvelle source'
      };
      var source = this.get('store').createRecord('source', newSource);
      source.save();
    }
  }

});
