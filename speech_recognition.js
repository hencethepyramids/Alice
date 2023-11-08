// speech-recognition.js
const annyang = require('annyang');
const fetch = require('node-fetch');
const detectIntent = require('./dialogflow'); // Your Dialogflow setup code from dialogflow.js

// Initialize annyang
annyang.init();

// Event listener for speech recognition
annyang.addCallback('result', (userSaid) => {
  // Use Dialogflow to detect intent and handle userSaid
  const sessionId = 'unique-session-id'; // You can use a unique identifier for each session
  detectIntent(userSaid, sessionId)
    .then((dialogflowResponse) => {
      const fulfillmentText = dialogflowResponse.fulfillmentText;
      console.log('Assistant says:', fulfillmentText);
      // Respond to the user with fulfillmentText
    })
    .catch((error) => {
      console.error('Dialogflow error:', error);
      // Handle the error
    });
});

// Start listening for voice commands
annyang.start();
