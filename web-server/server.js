import puppeteer from 'puppeteer-core'
import express from 'express'
import axios from 'axios'
import timeout from 'connect-timeout'
import createBrowser from './browser.js'
import logger from './logger.js';
import config from 'config'


const app = express()
const PORT = config.get('Port')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('voice-over-translation')
})

const connectToBrowser = async () => {
  try {
    const json = await axios.get('http://127.0.0.1:12703/json/version')
    const wsEndpoint = json.data.webSocketDebuggerUrl
    const browser = await puppeteer.connect({ browserWSEndpoint: wsEndpoint })
    const page = await browser.newPage()
    return page
  } catch (err) {
    logger.error('Не удалось подключиться к запущенному Яндекс Браузеру');
    logger.debug(err)
    await createBrowser();
  }
}

const haltOnTimedout = (req, res, next) => {
	if (!req.timedout){
		next();
	}
	else {
		let err = new Error("Response timeout");
		err.status = 504;
		next(err);
	}
}

app.post('/video', timeout('60s', { respond: false } ), haltOnTimedout, async (req, res) => {
  logger.info(`Получено новое видео на перевод (https://www.youtube.com/watch?v=${req.body.video_id})`)
  try {
    var page = await connectToBrowser()
  } catch {
    logger.error('Не удалось переподключиться к Яндекс браузеру')
  }

  if (page !== null && page !== undefined) {
    try {
      await page.goto(`https://www.youtube.com/watch?v=${req.body.video_id}`)
      try {
        await page.evaluate(() => {
          if (document.getElementsByClassName('ytp-ad-skip-button')) {
            var skip = document.getElementsByClassName("ytp-ad-skip-button")[0]
            if (skip !== undefined) {
              skip.click()
              logger.debug(`Реклама была пропущена (https://www.youtube.com/watch?v=${req.body.video_id})`)
            }
          }
        })
      } catch {
        logger.debug(`На странице не найдена реклама (https://www.youtube.com/watch?v=${req.body.video_id})`)
      }

      try {
        await page.waitForSelector('#y-banner-button')
        await page.click('#y-banner-button')
      } catch (err) {
        logger.error(`Не удалось перевести видео (https://www.youtube.com/watch?v=${req.body.video_id})`)
        page.on('request', async () => {
            try {
              res.sendStatus(412)
              logger.info("Возвращен статус код 412")
            } catch {}
          })

        try {
          await page.waitForTimeout(1000)
          await page.close()
          logger.info(`Страница закрыта из-за невозможности перевода (https://www.youtube.com/watch?v=${req.body.video_id})`)
          return;
        } catch (err) {
          createBrowser()
          logger.error(err)
          logger.debug(err)
        }
      }
    } catch (err) {
      logger.error(err.message)
      logger.debug(err)
      return
    }

    page.on('request', async (request) => {
      if (request.url().includes('.mp3')) {
        try {
          res.send({
            url: request.url(),
          })
          try {
            logger.info(`Видео было переведено (https://www.youtube.com/watch?v=${req.body.video_id})`)
          } catch {}
        }
        catch (err) {
          logger.error(err.message)
          logger.debug(err)
        }
      }
    })

    try {
      await page.waitForTimeout(500)
      await page.close()
    } catch (err) {
      logger.error(err.message)
      logger.debug(err)
    }
  } else {
    return logger.info('Браузер был перезапущен. Нажмите на кнопку перевода ещё один раз')
  }

})

app.listen(PORT, async () => {
  logger.info(`Server is up and running on port ${PORT}`)
  await createBrowser()
})