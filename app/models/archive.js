import DS from 'ember-data';

export default DS.Model.extend({
  subject_id: DS.attr(),
  title: DS.attr(),
  description: DS.attr()
});
