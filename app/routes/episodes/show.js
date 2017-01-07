import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      subjects: [
        {
          title: "Actu"
        },
        {
          title: "Enquête"
        }
      ],
      title: "Episode exemple"
    };
  }
});
