const functions = require('firebase-functions')
const path = require('path')
const express = require('express')
const fs = require('fs')
const { JSDOM } = require('jsdom')
const { Script } = require('vm')

const app = express()
app.set('view engine', 'ejs')
app.set('views', '.')
app.use(express.static('build'))

let webpackMiddleware

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('./webpack.config')({}, { mode: 'development' })
  const compiler = webpack(
    Object.assign({}, webpackConfig, { mode: 'development' })
  )
  webpackMiddleware = webpackDevMiddleware(compiler, {
    serverSideRender: true,
    publicPath: '/'
  })
  app.use(webpackMiddleware)
  app.use((req, res, next) => {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    const bundlePath = res.locals.webpackStats.toJson().assetsByChunkName.main
    const file = webpackMiddleware.fileSystem.readFileSync(
      path.join(`${process.cwd()}/`, 'build', bundlePath),
      'utf8'
    )
    return renderElmApp(file, fullUrl)
      .then(renderedHtml =>
        res.render('index', { bundlePath: bundlePath, renderedHtml })
      )
      .catch(next)
  })
} else {
  app.use((req, res, next) => {
    const bundlePath = require(`./build/stats.json`).assetsByChunkName.main
    const file = fs.readFileSync(`./build/${bundlePath}`, 'utf8')
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    return renderElmApp(file, fullUrl)
      .then(renderedHtml =>
        res.render('index', { bundlePath: bundlePath, renderedHtml })
      )
      .catch(next)
  })
}

const renderElmApp = (bundleFile, url) =>
  new Promise((resolve, reject) => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
      url,
      runScripts: 'outside-only'
    })
    try {
      dom.runVMScript(new Script(bundleFile))
    } catch (err) {
      reject(err)
    }

    setTimeout(() => {
      resolve(dom.window.document.body.innerHTML)
    }, 1)
  })

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.webApp = functions.https.onRequest(app)

// exports.webApp = functions
//   .runWith({ memory: '2GB', timeoutSeconds: 120 })
//   .https.onRequest(server)
