import Ember from 'ember';

export default Ember.Component.extend({
  content: [
    {value: 'photo', label: 'Photo'},
    {value: 'video', label: 'Video'},
  ],

  didReceiveAttrs() {
    var value = this.get('value');
    if(value === 'video'){
      let content = this.get('content');
      let _selection = content[1];

      this.set('selection', _selection);
    }
  },

  actions: {
    change: function () {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let content = this.get('content');

      let _selection = content[selectedIndex];

      this.sendAction('willChangeAction', _selection);

      this.set('selection', _selection);
      this.set('value', _selection.value);

      this.sendAction('didChangeAction', _selection);
    }
  }
});
