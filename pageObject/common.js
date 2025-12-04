module.exports = {
  SALESFORCE_HOME: '/lightning/page/home',
  BASE_URL: 'https://myridius16-dev-ed.develop.lightning.force.com'
};
async function clickMenu(dropdown, menuText) {
  await dropdown.getByText(menuText, { exact: true }).first().click();
}

export async function selectComboboxOption(page, labelName, optionText) {

  const comboButton = page.locator(`button[aria-label="${labelName}"]`).first();
  await comboButton.scrollIntoViewIfNeeded();
  await comboButton.click();
  const optionLocator = page.locator(`//lightning-base-combobox-item//*[text()="${optionText}"]`);
  await optionLocator.waitFor({ state: "visible" });
  await optionLocator.click();
}
async function selectDropdown(page, optionText) {
  await page.locator(`span[title="${optionText}"]`).click();
}
module.exports = {

  clickMenu,
  selectComboboxOption,
  selectDropdown
};