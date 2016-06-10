import Ember from 'ember';

var questions = [{
  id: 1,
  question: "What is the highest road in Oregon?",
  author: "Bob Roberts",
  notes: "I looked in an atlas, but could not find the information I was looking for."
}, {
  id: 2,
  question: "What is the best location for photographing a wolf in the wild?",
  author: "Jane Brewer",
  notes: "I am planning a trip and have always wanted to see a wolf!"
}, {
  id: 3,
  question: "What is the ratio of rolled oats to water for oatmeal?",
  author: "Jon Smith",
  notes: "I don't really like to cook."
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});