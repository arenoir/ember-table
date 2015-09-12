import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';

const {Component, computed} = Ember;

export default Component.extend(StyleBindingsMixin, RegisterTableComponentMixin, {
  // ---------------------------------------------------------------------------
  // API - Inputs
  // ---------------------------------------------------------------------------

  // TODO: Doc
  classNames: ['ember-table-cell', 'ember-table-header-cell'],
  classNameBindings: ['column.isSortable:sortable', 'column.textAlign'],
  styleBindings: ['width', 'height'],

  // ---------------------------------------------------------------------------
  // Internal properties
  // ---------------------------------------------------------------------------

  column: null,
  width: computed.alias('column.width'),
  minWidth: computed.alias('column.minWidth'),
  maxWidth: computed.alias('column.maxWidth'),
  nextResizableColumn: computed.alias('column.nextResizableColumn'),

  headerHeight: null,
  height: Ember.computed.alias('headerHeight'),
  columnMode: null,
  columnsFillTable: null,

  actions: {
    sortByColumn(column) {

    },

    resize(offsetX) {
      var width  = this.get('width');
      var nWidth = width + (offsetX || 0);

      this.set('width', nWidth);
    }
  
  }

});
