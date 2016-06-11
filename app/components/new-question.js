// Displays new question form when text is clicked
// Saves to Firebase database correctly
// Child of question.js

import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        answer: this.get('answer') ? this.get('answer') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    },
  }
});
