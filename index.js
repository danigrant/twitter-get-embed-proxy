const express = require('express')
const app = express()
const port = 3001 || process.env.$PORT
const fetch = require('node-fetch')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/twitter-embed-code', async (req, res) => {

  let response = await fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/${req.query.name}/status/${req.query.status}`)
  let json = await response.json()

  res.send(json.html)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
