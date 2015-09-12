import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header-cell-resize-handle', 'Integration | Component | header cell resize handle', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{header-cell-resize-handle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#header-cell-resize-handle}}
      template block text
    {{/header-cell-resize-handle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
