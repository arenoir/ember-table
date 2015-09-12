import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';
//import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';

const {Component, computed} = Ember;

export default Component.extend(StyleBindingsMixin, {
  row: null,
  classNames: 'ember-table-table-row',
  //columns: Ember.A,
  //prepareContent: Ember.K,
});
