const { model, Schema } = require('mongoose')
const Character = new Schema({
  name: String,
  class: String, // class & level
  background: String,
  race: String,
  faction: String,
  alignment: String,
  exp: String,
  proficiency: String,
  inspiration: String,
  strength: String,
  athletics: String,
  dexterity: String,
  acrobatics: String,
  sleight_of_hand: String,
  stealth: String,
  constitution: String,
  intelligent: String,
  arcana: String,
  history: String,
  investigation: String,
  nature: String,
  religion: String,
  wisdom: String,
  animal_handling: String,
  insight: String,
  medicine: String,
  perception: String,
  other_pro_lang: String,
  survival: String,
  charisma: String,
  deception: String,
  intimidation: String,
  performance: String,
  persuasion: String,
  armor_class: String,
  initiative: String,
  speed: String,
  maxHP: String,
  HP: String,
  temp_HP: String,
  hit_dice: String,
  death_save: String,
  successes: String,
  failures: String,
  att_spell_name: String,
  att_spell_bonus: String,
  att_spell_type: String,
  CP: String,
  SP: String,
  EP: String,
  GP: String,
  PP: String,
  equipments: String,
  traits: String,
  ideals: String,
  bonds: String,
  flaws: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})
module.exports = model('Character', Character)
