const express = require('express')
const app = express()
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const transactions = require('./routes/transactions.js')
dotenv.config({ path:'./config/config.env'})

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log('server connected'))
