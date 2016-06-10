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
