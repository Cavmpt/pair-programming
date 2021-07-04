import express from 'express'
import queryString from 'query-string'
import url from 'url'
import redis from 'redis'
const client = redis.createClient()

client.on('error', function (error) {
  console.error(error)
})

const router = express.Router()

router.get('/set', (req, res) => {
  var url = require('url')
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query
  console.log('req:', query)
  client.set('key', 'value', redis.print)

  res.status(200).json('hello world')
})

router.get('/get', (req, res) => {
  // const parsed = queryString.parse(location.search)
  console.log('req:', req)

  client.get('key', redis.print)

  res.status(200).json('hello world')
})

export default router

// http://localhost:4000/set?somekey=somevalue
