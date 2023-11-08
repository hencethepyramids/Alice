// speech-recognition.js
const annyang = require('annyang');
const fetch = require('node-fetch');

// Initialize annyang
annyang.init();

// Add voice commands and their corresponding functions
annyang.addCommands({
  'hello': () => {
    console.log('Hello!');
  },
  'what is the time': () => {
    // Implement time-related logic here
  },
});

// Start listening for voice commands
annyang.start();
