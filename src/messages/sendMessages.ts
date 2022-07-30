import puppeteer from "puppeteer";
import { delay } from "../utils/delay";
export async function sendMessages(
  page: puppeteer.Page,
  msg: string,
  toContact: string
) {
  try {
    await page.waitForSelector("._3OvU8");
    await delay(3000);

    await page.click(`span[title=${toContact}]`);
    await page.waitForSelector(".p3_M1");

    const editor = await page.$(`div[data-tab="10"]`);
    await editor?.focus;

    await page.evaluate(() => {
      document.execCommand("insertText", false, msg);
    });

    await page.click("span[data-testId='send']");
    await delay(500);
  } catch (e) {
    /* handle error */
    console.log(e);
  }
}
