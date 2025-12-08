import{ test } from "@playwright/test";
test('LEAFTAPS APPLICATION',async({page})=>
    {
await page.goto('http://leaftaps.com/opentaps/control/main');

await page.locator(`//input[contains(@id,"username")]`).fill('demosalesmanager')
await page.locator(`//input[contains(@id,"password")]`).fill('crmsfa')
await page.locator(`//input[contains(@class,'decorativeSubmit')]`).click();
await page.locator(`//div[contains(@id,"label")]`).click();
await page.locator(`//a[text()="Leads"]`).click();
await page.locator(`//a[text()="Find Leads"]`).click()
await page.locator("(//input[@name='firstName'])[3]").fill('Purnima');
await page.locator(`(//button[text()="Find Leads"])/parent::em`).click();

await page.locator(`(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a)[1]`).click();
await page.locator(`//a[text()='Edit']`).click();

await page.locator(`//input[@id="updateLeadForm_generalProfTitle"]`).fill('80000');
await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill('lifesciences');
await page.locator(`//input[@value="Update"]`).click();
}
)
