const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json({
    limit:'10kb'
}))
app.use(cors())





module.exports = app