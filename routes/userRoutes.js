const router = require('express').Router()
const { User, Character } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  User.register(new User({ username }), password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

router.get('/users/characters', passport.authenticate('jwt'), (req, res) => {
  Character.find()
    .then(character => res.json(character))
    .catch(err => console.log(err))
})

router.get('/users/characters/:id', passport.authenticate('jwt'), (req, res) => {
  console.log(req.params.id)
  console.log(res)
  Character.findById(req.params.id)
    .populate('users')
    .then(character => res.json(character))
})

// GET all users
router.get('/users', (req, res) => {
  User.find()
    .populate('users')
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// DELETE one user
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// POST one user
// router.post('/users', (req, res) => {
//   User.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => console.log(err))
// })

// PUT one user
// router.put('/users/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

// DELETE one user
// router.delete('/users/:id', (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.log(err))
// })

module.exports = router
