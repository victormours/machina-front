import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.belongsTo('subject'),
  title: DS.attr(),
  description: DS.attr(),
  media_type: DS.attr(),
  display_type: DS.attr(),
  time_in: DS.attr(),
  time_off: DS.attr(),
  date: DS.attr(),
  source: DS.belongsTo('source')
});
