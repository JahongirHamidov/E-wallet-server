const Transaction = require('../models/Transaction')

// @desc   GET all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async(req,res,next) => {
    try {
        const transactions = await Transaction.find()

        return  res.status(200).json({
            success:true,
            count: transactions.length,
            data:transactions
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error: 'server error'
        })
    }
}

// @desc   Add transaction
// @route POST /api/v1/transactions
// @access Public
exports.postTransaction = async(req,res,next) => {
    const {text,amount} = req.body

    try {
        const transaction = await Transaction.create(req.body)
        return res.status(200).json({
            success: true,
            data: transaction
            
        })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message)

            return res.status(500).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                message: 'server error'
        })}  
    }
}

// @desc   Delete transaction
// @route DELETE /api/v1/transactions:id
// @access Public
exports.deleteTransaction = async(req,res,next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        
        if(!transaction){
            res.status(404).json({
                success:false,
                error:'No transaction found'
            })
        }
        await transaction.remove()
        res.status(200).json({success: true, data: {}})

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}
