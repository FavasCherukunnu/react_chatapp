const express = require('express')
const app = express()
const cors = require('cors')
const port = 3002

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`chat app listening on port ${port}`)
})