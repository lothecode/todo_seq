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
app.get('/', (req, res) => {
  res.send('hello todo sequelize project')
})


app.listen(port, () => {
  console.log(`APP is running on port ${port}`)
})