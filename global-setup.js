const { chromium } = require('@playwright/test');
const { getAccessToken } = require('./utils/salesforceJwt');
const fs = require('fs');

module.exports = async () => {
  const tokenData = await getAccessToken();
  const { access_token, instance_url } = tokenData;

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  const page = await context.newPage();

  // Use frontdoor URL to authenticate with access token
  const frontdoorUrl = `${instance_url}/secur/frontdoor.jsp?sid=${access_token}&retURL=/lightning`;
  await page.goto(frontdoorUrl, { waitUntil: 'load' });

  // Save storage state (auth.json) for future tests
  await context.storageState({ path: 'auth.json' });

  await browser.close();
};
