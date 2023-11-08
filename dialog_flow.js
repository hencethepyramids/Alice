// dialogflow.js
const dialogflow = require('dialogflow');
const fetch = require('node-fetch');

const sessionClient = new dialogflow.SessionsClient();
const projectId = 'YOUR_PROJECT_ID'; // Replace with your Dialogflow project ID

async function detectIntent(query, sessionId) {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'en-US',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return result;
}

module.exports = detectIntent;
