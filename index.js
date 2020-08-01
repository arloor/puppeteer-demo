// puppeteer文档： https://pptr.dev/#?product=Puppeteer&version=v5.2.1
const puppeteer = require('puppeteer');

let launchOptions = {
    "headless": false,
    args: ['--start-maximized', "--proxy-pac-url=https://arloor.com/pac"], //"--proxy-server=socks5://localhost:1080"
    ignoreDefaultArgs: ["--enable-automation","--no-first-run"]
}

let defaultViewPort = {
    "width": 1920,
    "height": 1080
}

/**
 * 打印默认启动参数，一般需要ignore一些
 */
function printDefaultArgs() {
    let defaultArgs = puppeteer.defaultArgs();
    for (const defaultArg of defaultArgs) {
        console.log(defaultArg)
    }
}

async function main() {
    const browser = await puppeteer.launch(launchOptions);

    let pages = await browser.pages();
    const page = pages[0];
    await page.setViewport(defaultViewPort)
    await page.goto('https://arloor.com');
    await page.screenshot({path: 'example.png'});

    // await browser.close();
}

main();