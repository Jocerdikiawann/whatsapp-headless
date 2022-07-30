import puppeteer from "puppeteer";
import { getQrCode } from "./src/auth/loginWA";
import { sendMessages } from "./src/messages/sendMessages";
import { delay } from "./src/utils/delay";
import readline from "readline";
(async () => {
  //init
  const toContact = "Noted";
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    userDataDir: "./cache",
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
  );
  await page.goto("https://web.whatsapp.com/", { waitUntil: "networkidle0" });
  await getQrCode(page);
  await delay(1000);

  await page.waitForSelector("._3OvU8");
  await page.click(`span[title=${toContact}]`);
  await page.waitForSelector(".p3_M1");

  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  r.question("Send messages: \n", async (msg) => {
    msg.toLowerCase();
    await sendMessages(page, msg);
  });
})();
