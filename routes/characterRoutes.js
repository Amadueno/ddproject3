const router = require('express').Router()
const { Character, User } = require('../models')
const passport = require('passport')

router.get('/characters', passport.authenticate('jwt'), (req, res) => {
  Character.find()
    .populate('user')
    .then(characters => res.json(characters))
    .catch(err => console.error(err))
})

router.post('/characters', passport.authenticate('jwt'), (req, res) => {
  Character.create({
    name: req.body.name,
    class: req.body.class,
    background: req.body.background,
    race: req.body.race,
    faction: req.body.faction,
    alignmnent: req.body.alignment,
    exp: req.body.exp,
    dci: req.body.dci,
    user: req.user._id
  })
    .then(character => {
      User.findByIdAndUpdate(req.user._id, { $push: { characters: character._id } })
        .then(() => res.json({
          name: character.name,
          class: character.class,
          background: character.background,
          race: character.race,
          faction: character.faction,
          alignmnent: character.alignment,
          exp: character.exp,
          dci: character.dci,
          user: req.user
          // title: character.title,
          // body: character.body,
          // user: req.user
        }))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

module.exports = router

// const router = require('express').Router()
// const { Character } = require('../models')

// router.get('/character', (req, res) => {
//   Character.find()
//     .then(character => res.json(character))
//     .catch(err => console.log(err))
// })

// router.post('/character', (req, res) => {
//   Character.create(req.body)
//     .then(character => res.json(character))
//     .catch(err => console.log(err))
// })

// // router.put('/character/:id', (req, res) => {
// //   character.findByIdAndUpdate(req.params.id, req.body)
// //     .then(character => res.json(character))
// //     .catch(err => console.log(err))
// // })

// router.delete('/character/:id', (req, res) => {
//   Character.findById(req.params.id)
//     .then(character => character.remove())
//     .then(character => res.json(character))
//     .catch(err => console.log(err))
// })

// module.exports = router
