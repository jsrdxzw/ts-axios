const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const app = express()
const compiler = webpack(webpackConfig)

const PORT = process.env.PORT || 8080

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/simple/get', (req, res) => {
  res.json({
    msg: `hello world`
  })
})

app.listen(PORT, function() {
  console.log(`server is running at port ${PORT}`)
})
