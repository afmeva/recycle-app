import express from 'express'
import path from 'path'

const app = express()
const PORT = process.PORT || 8080

app
  .use(express.static(path.join(__dirname, 'build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
