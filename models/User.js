const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  characters: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
