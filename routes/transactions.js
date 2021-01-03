const express = require('express')
const router = express.Router()
const {getTransactions,postTransaction,deleteTransaction} = require('../controllers/transactions.js')

router
    .route('/')
        .get(getTransactions)
        .post(postTransaction)

router
    .route('/:id')
        .delete(deleteTransaction)
module.exports = router