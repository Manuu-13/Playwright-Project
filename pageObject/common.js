module.exports = {
  SALESFORCE_HOME: '/lightning/page/home',
  BASE_URL: 'https://myridius16-dev-ed.develop.lightning.force.com'
};
async function clickMenu(dropdown, menuText) {
  await dropdown.getByText(menuText, { exact: true }).first().click();
}
module.exports = { clickMenu };
