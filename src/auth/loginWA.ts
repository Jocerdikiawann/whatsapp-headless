import puppeteer from "puppeteer";

export async function getQrCode(page: puppeteer.Page) {
  try {
    const qrcanvas = await page.waitForSelector("._2UwZ_");

    await qrcanvas?.screenshot({ path: "qrcode.png" });
  } catch (e) {
    /* handle error */
    console.log(e);
  }
}
