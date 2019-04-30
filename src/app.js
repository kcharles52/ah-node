import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.disable('x-powered-by')

// adding app level middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api/data', (req, res) => {
  res.json({ message: 'initial server setup' })
})

module.exports = app
