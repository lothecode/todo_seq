const express = require('express')
const router = express.Router()


// 首頁
router.get('/', (req, res) => {
  res.send('HOME new todo-sequelize project')
})

module.exports = router