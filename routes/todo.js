const express = require('express')
const router = express.Router()
const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

// List all
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

// new one page
router.get('/new', authenticated, (req, res) => {
  res.send('新增頁面')
})
//add new action
router.post('/', authenticated, (req, res) => {
  res.send('新增一項')
})

// List one detail
router.get('/:id', authenticated, (req, res) => {
  res.send('詳細一項')
})

// 修改 Todo 頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改 Todo 頁面')
})


// Edit one
router.put('/:id', authenticated, (req, res) => {
  res.send('edit一項')
})

// delete 
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('delete一項')
})

module.exports = router