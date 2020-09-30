const router = require('express').Router()
const { Note, User } = require('../models')
const passport = require('passport')
router.get('/notes', passport.authenticate('jwt'), (req, res) => {
  Note.find()
    .populate('user')
    .then(notes => res.json(notes))
    .catch(err => console.error(err))
})
router.post('/notes', passport.authenticate('jwt'), (req, res) => {
  Note.create({
    input: req.body.input,
    user: req.user._id
  })
    .then(note => {
      User.findByIdAndUpdate(note.user, { $push: { notes: note._id } })
        .then(() => res.json(note))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})
router.post('/notes/bulk', passport.authenticate('jwt'), (req, res) => {
  const characters = req.body.map(note => ({
    ...note,
    user: req.user._id
  }))
  Note.create(users)
    .then(users => {
      const noteIds = characters.map(note => note._id)
      User.findById(req.user._id)
        .then(user => {
          const allNotes = [...user.notes, ...noteIds]
          User.findByIdAndUpdate(req.user._id, { items: allNotes })
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
        })
    })
})
router.put('/notes/:id', passport.authenticate('jwt'), (req, res) => {
  console.log(req.body)
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one note
router.delete('/notes/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})
module.exports = router
