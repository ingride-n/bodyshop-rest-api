require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')


const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (e) => console.error(e))
db.once('open', () => console.log('Connected to database successfully'))


app.listen(3000, () => console.log('Server started'))