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
    strengthValue: req.body.strengthValue,
    dexterityValue: req.body.dexterityValue,
    constitutionValue: req.body.constitutionValue,
    intelligenceValue: req.body.intelligenceValue,
    wisdomValue: req.body.wisdomValue,
    charismaValue: req.body.charismaValue,
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
    other_pro_lang: req.body.other_pro_lang,
    survival: req.body.survival,
    charisma: req.body.charisma,
    deception: req.body.deception,
    intimidation: req.body.intimidation,
    performance: req.body.performance,
    persuasion: req.body.persuasion,
    perceptionValue: req.body.perceptionValue,
    armor_class: req.body.armor_class,
    initiative: req.body.initiative,
    speed: req.body.speed,
    maxHP: req.body.maxHP,
    HP: req.body.HP,
    temp_HP: req.body.temp_HP,
    total: req.body.total,
    hit_dice: req.body.hit_dice,
    successes: req.body.successes,
    failures: req.body.failures,
    att_spell_name: req.body.att_spell_name,
    att_spell_bonus: req.body.att_spell_bonus,
    att_spell_type: req.body.att_spell_type,
    atk_spell: req.body.atk_spell,
    CP: req.body.CP,
    SP: req.body.SP,
    EP: req.body.EP,
    GP: req.body.GP,
    PP: req.body.PP,
    equipments: req.body.equipments,
    traits: req.body.traits,
    ideals: req.body.ideals,
    bonds: req.body.bonds,
    flaws: req.body.flaws,
    feat_traits: req.body.feat_traits
  })
    .then(character => {
      User.findByIdAndUpdate(character.user, { $push: { characters: character._id } })
        .then(() => res.json(character))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

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

router.put('/characters/:id', passport.authenticate('jwt'), (req, res) => {
  console.log(req.body)
  Character.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
