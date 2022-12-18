const express = require('express')
const cors = require('cors')
require('./db/mongoose')
require('dotenv').config()

const userRouter = require('./routers/user')

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())

app.use(userRouter)

app.use(
  cors({
    origin: "*",
  }),
)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
