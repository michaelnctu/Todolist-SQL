const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo


// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   return Todo.findByPk(id)
//     .then(todo => res.render('detail', { todo: todo.toJSON() }))
//     .catch(error => console.log(error))
// })

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name       // 從 req.body 拿出表單裡的 name 資料
  return Todo.create({ name })     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})


module.exports = router