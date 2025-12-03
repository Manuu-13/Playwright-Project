export class Locator{
    newButton='//div[@title="New"]';
    accountName='//input[@name="Name"]';
    phone='//input[@name="Phone"]';
    website='//input[@name="Website"]';
    saveButton='//button[@name="SaveEdit"]';
    dropdown='div.slds-dropdown.slds-dropdown_right';
    leadName='//input[@name="lastName"]';
    leadFirstName='//input[@name="firstName"]';
    leadCompany='//input[@name="Company"]';
    leadsalutation='//button[@aria-label="Salutation"]';
    selectConverted='//span[text()="Select Converted Status"]';
    converted='//a[@title="Converted"]';
    convert='//button[text()="Convert"]';
}
export const locator = new Locator();