const { test, expect } = require('@playwright/test');
require('dotenv').config({ path: './playwright.env' });
const { faker } = require('@faker-js/faker');
const { clickMenu } = require('../pageObject/common');
const { locator } = require('../pageObject/Locator');
const { selectComboboxOption,selectDropdown } = require('../pageObject/common');
const { generateLeadData, generateAccountData, generateContactData } = require('../utils/data');
const fs = require('fs');
let accName = faker.company.name();
let Phone = faker.phone.number();
let website=faker.internet.url();
let lastName=faker.person.lastName();
let firstName=faker.person.firstName();
test('Account creation', async ({ page }) => {
  const Account = generateAccountData();

  const url = "https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home";
  
  await page.goto(url);
  
  await expect(page).toHaveURL(/lightning/);
  
  const moreButton = page.getByText('More', { exact: true }).filter({ has: page.locator('visible=true') });
  await moreButton.first().click();

  const dropdown = page.locator("div.slds-dropdown.slds-dropdown_right");
  await dropdown.waitFor({ state: 'visible' });

  await clickMenu(dropdown, 'Accounts');
  //Account creation
  await page.locator(locator.newButton).click();
  await page.locator(locator.accountName).fill(Account.name);
  await selectComboboxOption(page, "Type", "Prospect");
  await selectComboboxOption(page, "Industry", "Healthcare");
  await page.locator(locator.phone).fill(Account.phone);
  await page.locator(locator.website).fill(Account.website);
  await page.locator(locator.saveButton).click();
  //related contact creation
  await page.locator(locator.newContact).click();
  await page.waitForTimeout(3000);
  await page.locator(locator.firstName).fill(firstName);
  await page.locator(locator.lastName).fill(lastName);
  await page.locator(locator.saveButton).click();
  await page.locator(locator.newOpportunity).click();
  await page.waitForTimeout(3000);
  //related opportunity creation
  await page.locator(locator.accountName).fill(accName);
  await page.locator(locator.Amount).fill('50000');
  await page.locator(locator.closeDate).fill('12/12/2024');
  await selectComboboxOption(page, "Stage", "Qualification");
  await page.locator(locator.saveButton).click();
  //related case creation
  await page.locator(locator.NewCase).click();
  await page.waitForTimeout(3000);
  await selectComboboxOption(page, "Status", "Working");
  await selectComboboxOption(page, "Case Origin", "Phone");
  await page.locator(locator.saveButton).click();
  //log a task 
  await page.locator(locator.newTask).click();
// Open Subject dropdown
const subjectInput = page.locator(locator.selectSubject);
await subjectInput.click();
const dropdown1 = subjectInput.locator('xpath=following::div[@role="listbox"][1]');
await dropdown1.waitFor({ state: 'visible' });
// Select the option
await dropdown1.locator('//span[@title="Send Quote"]').click();
 await page.getByRole('button', { name: "Save" }).click();
  
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
  await selectComboboxOption(page, "Lead Status", "Working - Contacted");
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