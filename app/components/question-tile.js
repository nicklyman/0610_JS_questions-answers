// Child of question.js
// Hide and show additional notes working correctly

import Ember from 'ember';

export default Ember.Component.extend({
  notesAreShowing: false,

  actions: {
    notesShow() {
      this.set('notesAreShowing', true);
    },
    notesHide() {
      this.set('notesAreShowing', false);
    },
  }
});
