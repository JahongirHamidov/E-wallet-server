// @desc   GET all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async(req,res,next) => {
    res.send('GET TRANSACTIONS')
}

// @desc   Add transaction
// @route POST /api/v1/transactions
// @access Public
exports.postTransaction = async(req,res,next) => {
    res.send('ADD TRANSACTION')
}

// @desc   Delete transaction
// @route DELETE /api/v1/transactions:id
// @access Public
exports.deleteTransaction = async(req,res,next) => {
    res.send(`DELETE TRANSACTION ${req.params.id}`)
}
