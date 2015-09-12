import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

const {Component, computed} = Ember;

function _drop(event) {
  event.preventDefault();
}

function _dragover(event) {
  event.preventDefault();
}

export default Component.extend(StyleBindingsMixin, {
  classNames: ['table-header'],
  styleBindings: ['width', 'height'],
  columns: null,
  width: 0,

  //mitigate issue http://stackoverflow.com/questions/12128216/html5-drag-release-offsetx-offsety-jump/32486095#32486095
  didInsertElement() {
    document.addEventListener("drop", _drop, false);
    document.addEventListener("dragover", _dragover, false);
  },

  willDestroyElement() {
    document.removeEventListener("drop", _drop, false);
    document.removeEventListener("dragover", _dragover, false);
  }
});
