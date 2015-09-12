import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

const {Component, computed} = Ember;

export default Component.extend(StyleBindingsMixin, {
  classNames: ['table-body'],
  styleBindings: 'height',

  actions: {
    scrollChange(left, top) {
      this.sendAction('scrollChange', left, top);
    }
  }
});
