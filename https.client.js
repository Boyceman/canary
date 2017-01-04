var https = require('https')
var fs = require('fs')
var open = require('open')
var options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt'),
  ca: [fs.readFileSync('./keys/ca.crt')]
}
options.agent = new https.Agent(options)

var req = https.request(options, (resp) => {
  resp.setEncoding('utf-8')
  resp.on('data', (data) => {
    console.log(data)
  })
})

req.end()
req.on('error', (e)=>{
  console.log(e)
})
