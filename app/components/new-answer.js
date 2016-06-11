// Shows new answer form when text is clicked
// DOES NOT SAVE ANSWER
// Child of answer.js

import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        answer: this.get('answer') ? this.get('answer') : "",
        answerer: this.get('answerer') ? this.get('answerer') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('save', params);
    },
  }
});
