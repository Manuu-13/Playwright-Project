export class Locator{
    newButton='//div[@title="New"]';
    accountName='//input[@name="Name"]';
    phone='//input[@name="Phone"]';
    website='//input[@name="Website"]';
    saveButton='//button[@name="SaveEdit"]';
    dropdown='div.slds-dropdown.slds-dropdown_right';
    lastName='//input[@name="lastName"]';
    firstName='//input[@name="firstName"]';
    leadCompany='//input[@name="Company"]';
    leadsalutation='//button[@aria-label="Salutation"]';
    selectConverted='//span[text()="Select Converted Status"]';
    converted='//a[@title="Converted"]';
    convert='//button[text()="Convert"]';
    Amount ='//input[@name="Amount"]';
    closeDate='//input[@name="CloseDate"]';
    stage='//button[@aria-label="Stage"]';
    selectStage='//span[text()="Select Stage"]';
    selectQualification='//a[@title="Qualification"]';
    newTask='//button[@title="New Task"]';
    selectSubject='//label[text()="Subject"]/following::input[1]';
    NewCase='//lst-related-list-view-manager//*[@name="NewCase"]';
    newContact='//lst-related-list-view-manager//*[@name="NewContact"]';
    newOpportunity='//lst-related-list-view-manager//*[@name="New"]';
}
export const locator = new Locator();