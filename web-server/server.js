import puppeteer from 'puppeteer-core'
import express from 'express'
import axios from 'axios'
import timeout from 'connect-timeout'
import createBrowser from './browser.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(timeout('60s'))

app.get('/', (req, res) => {
  res.send('voice-over-translation')
})

app.post('/video', async (req, res) => {
  console.log(`Получено новое видео на перевод | https://www.youtube.com/watch?v=${req.body.video_id}`)
  const json = await axios.get('http://127.0.0.1:12703/json/version')
  const wsEndpoint = json.data.webSocketDebuggerUrl
  const browser = await puppeteer.connect({ browserWSEndpoint: wsEndpoint })
  const page = await browser.newPage()

  try {
    await page.goto(`https://www.youtube.com/watch?v=${req.body.video_id}`)
    try {
      await page.evaluate(() => {
        if (document.getElementsByClassName('ytp-ad-skip-button')) {
          var skip = document.getElementsByClassName("ytp-ad-skip-button")[0]
          if (skip != undefined) {
            skip.click()
            console.log(`Реклама была пропущена | https://www.youtube.com/watch?v=${req.body.video_id}`)
          }
        }
      })
    } catch {
      console.log(`На странице не найдена реклама | https://www.youtube.com/watch?v=${req.body.video_id}`)
    }
    try {
      await page.waitForSelector('#y-banner-button')
      await page.click('#y-banner-button')
    } catch (err) {
      console.log(`Не удалось перевести видео | https://www.youtube.com/watch?v=${req.body.video_id}`)
      page.on('request', async () => {
          try {
            res.sendStatus(412)
            console.log(`Отправлен статус код - 412 | https://www.youtube.com/watch?v=${req.body.video_id}`)
          }
          catch (err) {
            console.log(err)
          }
        })
      try {
        await page.waitForTimeout(500)
        await page.close()
        console.log(`Страница закрыта | https://www.youtube.com/watch?v=${req.body.video_id}`)
        return;
      } catch (err) {
        createBrowser()
        console.log(err)
      }
    }
  } catch (err) {
    console.log(err)
  }


  page.on('request', async (request) => {
    if (request.url().includes('.mp3')) {
      try {
        res.send({
          url: request.url(),
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  })

  try {
    await page.waitForTimeout(500)
    await page.close()
  } catch (err) {
    createBrowser()
    console.log(err)
  }
})

app.listen(3000, () => {
  createBrowser()
  console.log('Server is up and running')
})
