const { model, Schema } = require('mongoose')

const Note = new Schema({
  input: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Note', Note)
