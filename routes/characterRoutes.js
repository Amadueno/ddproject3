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
    user: req.user._id,
    proficiency: req.body.proficiency,
    inspiration: req.body.inspiration,
    strength: req.body.strength,
    athletics: req.body.athletics,
    dexterity: req.body.dexterity,
    acrobatics: req.body.acrobatics,
    sleight_of_hand: req.body.sleight_of_hand,
    stealth: req.body.stealth,
    constitution: req.body.constitution,
    intelligent: req.body.intelligent,
    arcana: req.body.arcana,
    history: req.body.history,
    investigation: req.body.investigation,
    nature: req.body.nature,
    religion: req.body.religion,
    wisdom: req.body.wisdom,
    animal_handling: req.body.animal_handling,
    insight: req.body.insight,
    medicine: req.body.medicine,
    perception: req.body.perception,
    survival: req.body.survival,
    charisma: req.body.charisma,
    deception: req.body.deception,
    intimidation: req.body.intimidation,
    performance: req.body.performance,
    persuasion: req.body.persuasion,
    armor_class: req.body.armor_class,
    initiative: req.body.initiative,
    speed: req.body.speed,
    HP: req.body.HP,
    temp_HP: req.body.temp_HP,
    hit_dice: req.body.hit_dice,
    death_save: req.body.death_save,
    successes: req.body.successes,
    failures: req.body.failures
  })
    .then(character => {
      User.findByIdAndUpdate(character.user, { $push: { characters: character._id } })
        .then(() => res.json(character))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// router.post('/characters', passport.authenticate('jwt'), (req, res) => {
//   Character.create({
//     name: req.body.name,
//     class: req.body.class,
//     background: req.body.background,
//     race: req.body.race,
//     faction: req.body.faction,
//     alignmnent: req.body.alignment,
//     exp: req.body.exp,
//     user: req.user._id
//   })
//     // 5f6bc45c28a9760648259b4c
//     .then(character => {
//       User.findByIdAndUpdate(character.user, { $push: { characters: character._id } })
//         .then(() => res.json((character))
//           // {

//           // name: character.name,
//           // class: character.class,
//           // background: character.background,
//           // race: character.race,
//           // faction: character.faction,
//           // alignmnent: character.alignment,
//           // exp: character.exp,
//           // dci: character.dci,
//           // user: req.user
//           // title: character.title,
//           // body: character.body,
//           // user: req.user
//           // }

//           .catch(err => console.error(err))
//     })

router.post('/characters/bulk', passport.authenticate('jwt'), (req, res) => {
  const characters = req.body.map(character => ({
    ...character,
    user: req.user._id
  }))

  Character.create(characters)
    .then(characters => {
      const characterIds = characters.map(character => character._id)
      User.findById(req.user._id)
        .then(user => {
          const allcharacters = [...user.characters, ...characterIds]
          User.findByIdAndUpdate(req.user._id, { items: allcharacters })
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
        })
    })
})

// router.post('/characters/bulk', passport.authenticate('jwt'), (req, res) => {
//   const characters = req.body.map(characters => ({
//     ...characters,
//     user: req.user._id
//   }))

//   Character.create(characters)
//     .then(characters => {
//       const characterIds = characters.map(character => character._id)
//       User.findById(req.user._id)
//         .then(user => {
//           const allCharacters = [...user.characters, ...characterIds]
//           User.findByIdAndUpdate(req.user._id, { items: allCharacters })
//             .then(() => res.sendStatus(200))
//             .catch(err => console.log(err))
//         })
//     })
// })

//   .catch(err => console.error(err))
// })

// module.exports = router

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

module.exports = router
