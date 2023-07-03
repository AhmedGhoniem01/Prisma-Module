const express = require('express')
const app = express()

const robotRouter = require('./routes/robotRouter')

const dotenv = require('dotenv')
dotenv.config()
let port  = process.env.PORT

app.use('/robots', robotRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})