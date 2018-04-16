const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db.js')
const router = express.Router()

router.use(bodyParser.json())

router.put('/:commentId', (req, res) => {
  const commentId = req.params.commentId
  db.updateComment(commentId)
    .then((comments) => {
      res.send({comments})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:commentId', (req, res) => {
  const commentId = req.params.commentId
  db.deleteComment(commentId)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


module.exports = router
