const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const routes = require('./routes')


const db = require('./models')
const Todo = db.Todo
const User = db.User

const app = express()
app.use(routes)
const PORT = 3000
const session = require('express-session')


const usePassport = require('./config/passport') //是載入一包 Passport 設定檔
usePassport(app)
const passport = require('passport') //是把 Passport 套件本身載入進來

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})