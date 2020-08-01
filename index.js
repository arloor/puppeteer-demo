// puppeteer文档： https://pptr.dev/#?product=Puppeteer&version=v5.2.1
const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://arloor.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
};

main();