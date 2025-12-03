
// Open 1 browser (chrome ) and inside chrome open 2 tabs Amazon.in and redbus in in same edge browser:

import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {
const edge_browserInstance1 = await chromium.launch({ headless: false });
const edge_browserContext1 = await edge_browserInstance1.newContext();

const edge_page1 = await edge_browserContext1.newPage();
await edge_page1.goto("https://www.redbus.in");

const edge_page2 = await edge_browserContext1.newPage();
await edge_page2.goto("https://www.amazon.in");

const redbus_title = await edge_page1.title();
const redbus_url = edge_page1.url();
const amazon_title = await edge_page2.title();
const amazon_url = edge_page2.url();

console.log("RedBus Title:", redbus_title);
console.log("RedBus URL:", redbus_url);


console.log("Amazon Title:", amazon_title);
console.log("Amazon URL:", amazon_url);
}
// await new Promise(() => {}); // optional: keep browser open
)
