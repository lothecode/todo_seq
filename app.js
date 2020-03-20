const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
// "Handlebars: Access has been denied to resolve the property "done" because it is not an "own property" of its parent."
// https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
const Handlebars = require('handlebars')  //new add for @handlebars/allow-prototype-access
// new add for @handlebars/allow-prototype-access, 要先安裝@handlebars/allow-prototype-access (npm install @handlebars/allow-prototype-access)
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
// 載入 model
const db = require('./models')
const Todo = db.Todo
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'secretkey',
  resave: 'false',
  saveUninitialized: 'false'
}))

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

// 設定路由
app.use('/users', require('./routes/user'))
app.use('/', require('./routes/home'))
app.use('/todos', require('./routes/todo'))

app.listen(port, () => {
  console.log(`APP is running on port ${port}`)
})