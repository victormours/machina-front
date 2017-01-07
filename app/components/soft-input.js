import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.editing = false;
  },

  click() {
    this.set('editing', true);
  },

  focusOut() {
    this.set('editing', false);
  }
});
