import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ title:  'Tube EM40' },{ title: 'Tube EM39'}];
  }
});
