import webpack from 'webpack'
import http from 'http'
import fs from 'fs'

fs.readFile('./index.html', (err, html)=>{
  if(err) throw err
  http.createServer((req, res)=>{
    res.end(html)
  }).listen('8080')
})
