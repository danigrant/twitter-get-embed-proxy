const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 80
const fetch = require('node-fetch')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/twitter-embed-code', async (req, res) => {

  let response = await fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/${req.query.name}/status/${req.query.status}`)
  let json = await response.json()

  res.send(json.html)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
