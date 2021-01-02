const express = require('express')
const router = express.Router()
import {getItem} from '../controllers/controllers'

router.get('/', getItem)

module.exports = router