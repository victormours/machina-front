import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('episode-subject', 'Integration | Component | episode subject', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{episode-subject}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#episode-subject}}
      template block text
    {{/episode-subject}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
