const fs = require('fs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config({ path: './playwright.env' });

async function getAccessToken() {
  const privateKey = fs.readFileSync(process.env.SF_PRIVATE_KEY_PATH, 'utf8');

  const token = jwt.sign(
    {
      iss: process.env.SF_CLIENT_ID,
      sub: process.env.SF_USERNAME,
      aud: process.env.SF_LOGIN_URL,
      exp: Math.floor(Date.now() / 1000) + 300
    },
    privateKey,
    { algorithm: 'RS256' }
  );

  const response = await axios.post(
    `${process.env.SF_LOGIN_URL}/services/oauth2/token`,
    `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${token}`,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  // Save access token to file for global setup
  fs.writeFileSync('sfAccessToken.json', JSON.stringify(response.data));

  return response.data;
}

module.exports = { getAccessToken };
