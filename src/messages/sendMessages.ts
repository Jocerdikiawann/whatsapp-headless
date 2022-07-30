import puppeteer from "puppeteer";
export async function sendMessages(page: puppeteer.Page, msg: string) {
  try {
    const editor = await page.$(`div[data-tab="10"]`);
    await editor?.focus;

    await page.evaluate((msg) => {
      document.execCommand("insertText", false, msg);
    }, msg);

    await page.click("span[data-testId='send']");
  } catch (e) {
    /* handle error */
    console.log(e);
  }
}
