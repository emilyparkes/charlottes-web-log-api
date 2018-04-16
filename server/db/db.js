const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  newPost,
  updatePost,
  deletePost,
  getComments,
  newComment,
  updateComment,
  deleteComment
}

function getPosts (testConn) {
  const conn = testConn || knex
  return conn('Posts')
    .select()
}

function newPost (newPost, testConn) {
  const conn = testConn || knex
  return conn('Posts')
    .insert(newPost)
}

function updatePost (id, post, testConn) {
  const conn = testConn || knex
  return conn('Posts')
  .where('id', id)
  .insert(post)
}

function deletePost (postId, testConn) {
  const conn = testConn || knex
  return conn('Posts')
    .where('id', postId)
    .del()
}

function getComments (postId, testConn) {
  const conn = testConn || knex
  return conn('Comments')
    .where('post_id', postId)
    .select()
}

function newComment (newComment, testConn) {
  const conn = testConn || knex
  return conn('Comments')
    .insert(newComment)
}

function updateComment (testConn) {
  const conn = testConn || knex
  return conn('Comments')
    .select()
}

function deleteComment (commentId, testConn) {
  const conn = testConn || knex
  return conn('Comments')
    .where('id', commentId)
    .del()
}

