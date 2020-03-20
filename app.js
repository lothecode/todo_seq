const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 設定路由
// 苜頁
// 設定路由
// 首頁
app.get('/', (req, res) => {
  res.send('hello new todo-sequelize project')
})
// 認證系統的路由
// 登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})
// 登入檢查
app.post('/users/login', (req, res) => {
  res.send('login')
})
// 註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})
// 註冊檢查
app.post('/users/register', (req, res) => {
  res.send('register')
})
// 登出
app.get('/users/logout', (req, res) => {
  res.send('logout')
})


app.listen(port, () => {
  console.log(`APP is running on port ${port}`)
})