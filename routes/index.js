// 引入 home 模組程式碼
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')


router.use('/', home)
router.use('/todos', todos)

module.exports = router