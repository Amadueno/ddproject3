const { model, Schema } = require('mongoose')

const User = new Schema({
  id: Schema.ObjectId,
  name: String,
  characters: [{ type: Schema.ObjectId, ref: 'Character' }]
})

module.exports = model('User', User)
