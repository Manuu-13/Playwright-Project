const { test, expect } = require('@playwright/test');
require('dotenv').config({ path: './playwright.env' });
const { faker } = require('@faker-js/faker');
const { clickMenu } = require('../pageObject/common');
const { locator } = require('../pageObject/Locator');
const fs = require('fs');
let accName = faker.company.name();
let Phone = faker.phone.number();
let website=faker.internet.url();
let lastName=faker.person.lastName();
let firstName=faker.person.firstName();
test('Account creation', async ({ page }) => {

  const url = "https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home";
  
  await page.goto(url);
  
  await expect(page).toHaveURL(/lightning/);
  
  const moreButton = page.getByText('More', { exact: true }).filter({ has: page.locator('visible=true') });
  await moreButton.first().click();

  const dropdown = page.locator("div.slds-dropdown.slds-dropdown_right");
  await dropdown.waitFor({ state: 'visible' });

  await clickMenu(dropdown, 'Accounts');

  await page.locator(locator.newButton).click();
 await page.locator(locator.accountName).fill(accName);
  await page.locator(locator.phone).fill(Phone);
  await page.locator(locator.website).fill(website);
  await page.locator(locator.saveButton).click();
  
});
test('Lead Creation ', async ({ page }) => {

  const url = "https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home";

  await page.goto(url);
  await expect(page).toHaveURL(/lightning/);
  const moreButton = page.getByText('More', { exact: true }).filter({ has: page.locator('visible=true') });
  await moreButton.first().click();
  const dropdown = page.locator("div.slds-dropdown.slds-dropdown_right");
  await dropdown.waitFor({ state: 'visible' });
  await clickMenu(dropdown, 'Leads');

  await page.locator(locator.newButton).click();
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByRole('textbox', { name: 'Company' }).fill(accName);
  await page.locator(locator.saveButton).click();

}); 
test('Lead Creation and conversion', async ({ page }) => {

  const url = "https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home";

  await page.goto(url);
  await expect(page).toHaveURL(/lightning/);
  const moreButton = page.getByText('More', { exact: true }).filter({ has: page.locator('visible=true') });
  await moreButton.first().click();
  const dropdown = page.locator("div.slds-dropdown.slds-dropdown_right");
  await dropdown.waitFor({ state: 'visible' });
  await clickMenu(dropdown, 'Leads');

  await page.locator(locator.newButton).click();
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByRole('textbox', { name: 'Company' }).fill(accName);
  await page.locator(locator.saveButton).click();
  await page.locator(locator.converted).click();
  await page.locator(locator.selectConverted).click();
  await page.locator(locator.convert).click();

}); 