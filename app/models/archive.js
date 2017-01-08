import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.belongsTo('subject'),
  title: DS.attr(),
  description: DS.attr(),
  mediaType: DS.attr(),
  displayType: DS.attr(),
  timeIn: DS.attr(),
  timeOff: DS.attr(),
  date: DS.attr(),
  source: DS.belongsTo('source')
});
