// Open 2 different browsers (chrome & webkit)and launch redbus in one browser and flipkart in other browser
import { chromium, webkit, test } from "@playwright/test";

test("To launch a browser", async () => {

const edge_browserInstance1 = await chromium.launch(
     { headless: false});
const edge_browserContext1 = await edge_browserInstance1.newContext();
const edge_page1= await edge_browserContext1.newPage();
await edge_page1.goto("https://www.redbus.in");
const redbus_title=await edge_page1.title();
const redbus_url=await edge_page1.url();
console.log("Title",redbus_title);
console.log("URL is:",redbus_url);
const safari_browserInstance2=await webkit.launch(
    { headless: false });
const safari_browserContext2=await safari_browserInstance2.newContext();
const safari_page2=await safari_browserContext2.newPage();
await safari_page2.goto('https://www.flipkart.com');
const flipkart_title=await safari_page2.title();
const flipkart_url= await safari_page2.url();
await new Promise(()=>{});
console.log('TITLE:',flipkart_title);
console.log('URL is:',flipkart_url);
}
)
