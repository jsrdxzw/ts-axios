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

app.get('/base/get',(req,res)=>{
  res.json(req.query)
})

app.post('/base/post',(req,res)=>{
  res.json(req.body)
})

app.post('/base/buffer',(req,res)=>{
  const msg = []
  req.on('data',(chunk)=>{
    if (chunk){
      msg.push(chunk)
    }
  })
  req.on('end',()=>{
    const buffer = Buffer.concat(msg)
    res.json(buffer.toJSON())
  })
})

app.get('/error/get', function(req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    })
  } else {
    res.status(500)
    res.end()
  }
})

app.get('/error/timeout', function(req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    })
  }, 5000)
})

app.listen(PORT, function() {
  console.log(`server is running at port ${PORT}`)
})
