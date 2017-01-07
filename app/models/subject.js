import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  title: DS.attr(),
  episode: DS.belongsTo('episode')
});
