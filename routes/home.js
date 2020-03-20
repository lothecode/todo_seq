const express = require('express')
const router = express.Router()
const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

// 首頁
router.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      // console.log(req.user.id)
      if (!user) throw new Error("user not found")
      return Todo.findAll({
        where: { UserId: req.user.id }
      })
    })
    .then((todos) => {
      // console.log(todos)
      return res.render('index', { todos: todos })
    })
    .catch((error) => { return res.status(422).json(error) })
})
module.exports = router