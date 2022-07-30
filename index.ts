import puppeteer from "puppeteer";
import { getQrCode } from "./src/auth/loginWA";
(async () => {
  //init
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
})();
