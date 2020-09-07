// 引入 home 模組程式碼
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const users = require('./modules/auth')

const { authenticator } = require('../middleware/auth')



router.use('/', authenticator, todos)
router.use('/users', users)
router.use('/auth', auth)

router.use('/', authenticator, home)


module.exports = router