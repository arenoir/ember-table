import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

const {Component, computed} = Ember;

export default Component.extend( StyleBindingsMixin, {

  classNames: ['ember-table-cell'],
  classNameBindings: 'column.textAlign',
  styleBindings: 'width',

  row: null,
  column: null,
  width: computed.readOnly('column.width'),

  cellContent: computed('row', 'column', function() {
    var row    = this.get('row');
    var column = this.get('column');
    
    if (!row || !column) {
      return;
    }
    
    return column.getCellContent(row);
  })
});
