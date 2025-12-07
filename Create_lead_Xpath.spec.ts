import { test} from '@playwright/test';

test('Create_Lead LEAFTAPS APPLICATION',async({page})=>
{
await page.goto('http://leaftaps.com/opentaps/control/main');

await page.locator(`//input[contains(@id,"username")]`).fill('demosalesmanager')
await page.locator(`//input[contains(@id,"password")]`).fill('crmsfa')
await page.locator(`//input[contains(@class,'decorativeSubmit')]`).click();
await page.locator(`//div[contains(@id,"label")]`).click();
await page.locator(`//a[text()="Leads"]`).click();
await page.locator(`//a[text()="Create Lead"]`).click();
await page.locator(`//input[contains(@id,"createLeadForm_companyName")]`).fill('coforge');
await page.locator(`//input[@id="createLeadForm_firstName"]`).fill(`Purnima`)
await page.locator(`//input[@id="createLeadForm_lastName"]`).fill(`Dinesh`)
await page.locator(`//input[@id="createLeadForm_personalTitle"]`).fill (`Pooh`)
await page.locator(`//input[@id="createLeadForm_generalProfTitle"]`).fill(`Test Lead`)
await page.locator(`//input[@id="createLeadForm_annualRevenue"]`).fill(`40000`)
await page.locator(`//input[@id="createLeadForm_departmentName"]`).fill('Testing')
await page.locator(`//input[@id="createLeadForm_primaryPhoneNumber"]`).fill(`34596860890`)
await page.locator(`//input[@name="submitButton"]`).click();


}
)