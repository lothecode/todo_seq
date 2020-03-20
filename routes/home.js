const express = require('express')
const router = express.Router()
const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

// 首頁
router.get('/', authenticated, (req, res) => {
  res.send('列出全部todo')
  // const { todos, done } = req.body
  // Todo.findAll({ where: { userId: req.user._id } })
  //   .then(todos => {
  //     res.render('index', {
  //       todos,
  //       done
  //     })
  //   })
})

module.exports = router