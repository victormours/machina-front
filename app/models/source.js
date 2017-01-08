import DS from 'ember-data';

export default DS.Model.extend({
  archives: DS.hasMany('archives'),
  name: DS.attr()

});
