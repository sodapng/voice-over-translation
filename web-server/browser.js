import puppeteer from 'puppeteer-core'
import config from 'config'
import logger from './logger.js'


const args = [
 '--no-zygote',
 '--no-sandbox',
 '--no-first-run',
 '--ignore-certificate-errors',
 '--ignore-certificate-errors-skip-list',
 '--disable-accelerated-2d-canvas',
 '--hide-scrollbars',
 '--disable-notifications',
 '--disable-background-timer-throttling',
 '--disable-backgrounding-occluded-windows',
 '--disable-breakpad',
 '--disable-extensions',
 '--disable-features=TranslateUI,BlinkGenPropertyTrees',
 '--disable-ipc-flooding-protection',
 '--metrics-recording-only',
 '--mute-audio',
 '--remote-debugging-port=12703',
]

// Не работает с headless: true
const options = {
 headless: false,
 ignoreHTTPSErrors: true,
 executablePath: config.get('executablePath'),
 userDataDir: config.get('userDataDir'),
 args,
}

async function createBrowser () {
    const browser = await puppeteer.launch(options)
    const wsEndpoint = await browser.wsEndpoint()
    console.log(wsEndpoint)
}

export default createBrowser