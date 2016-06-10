/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'questions-answers',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: {
    apiKey: "AIzaSyBE5HQ6NNeA9vvCrxcM7mYM8A918CvR6ro",
    authDomain: "questions-answers-c9b2a.firebaseapp.com",
    databaseURL: "https://questions-answers-c9b2a.firebaseio.com",
    storageBucket: "questions-answers-c9b2a.appspot.com",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
