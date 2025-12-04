import{ test} from "@playwright/test";
test ('LEAFTAPS APPLICATION',async({page})=>
{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`[id="username"]`).fill(`Demosalesmanager`);
    await page.locator(`[id="password"]`).fill(`crmsfa`);
    await page.locator(`[type="submit"]`).click();
    await page.locator(`[id="label"]`).click();
    await page.locator(`[href="/crmsfa/control/leadsMain"]`).click();
    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click();
    await page.locator(`[id="createLeadForm_companyName"]`).fill(`coforge`);
    await page.locator(`[id="createLeadForm_firstName"]`).fill(`Poornima`);
    await page.locator(`[id="createLeadForm_lastName"]`).fill(`kaliappan`);
    await page.locator(`[id="createLeadForm_personalTitle"]`).fill('MS');
    await page.locator(`[id="createLeadForm_generalProfTitle"]`).fill(`Software lead`);
    await page.locator(`[id="createLeadForm_annualRevenue"]`).fill('30000');
    await page.locator(`[id="createLeadForm_departmentName"]`).fill(`Testing`);
    await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill(`9087538906`);
     await page.locator(`[name="submitButton"]`).click();
  
await page.locator(`[id="sectionHeaderTitle_leads"]`).click()
const title = await page.title();
  console.log('View Home page title:', title);

    await page.waitForTimeout(3000)
}
)