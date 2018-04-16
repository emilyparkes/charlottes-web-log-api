const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db.js')
const router = express.Router()

router.use(bodyParser.json())

router.get('/:postId/comments', (req, res) => {
  const postId = Number(req.params.postId)
  db.getComments(postId)
    .then(comments => {
      res.json(comments)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/:postId/comments', (req, res) => {
  const newComment = {
    post_id: Number(req.params.postId),
    comment: req.body.comment
  }
  db.addComment(newComment)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// UPDATE 
router.put('/:id', (req, res) => {
  const id = req.params.id
  const post = {
    title: req.body.title,
    date_created: req.body.date_created,
    paragraphs: paragraphs
  }
  db.updatePost(id, post)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// DELETE
router.get('/:id', (req, res) => {
  const postId = req.params.id
  db.deletePost(postId)
    .then(() => res.redirect('/'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/', (req, res) => {
  db.getPosts()
    .then((posts) => {
      res.send(posts)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newPost = {
    title: req.body.title,
    date_created: utils.getDate(),
    paragraphs: paragraphs
  }
  db.newPost(newPost)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
