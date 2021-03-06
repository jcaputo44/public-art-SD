const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String
  },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const pieceSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  artist: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  media: {
    type: String,
  },
  description: {
    type: String
  },
  currentlyAvailable: {
    type: Boolean,
    default: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Piece', pieceSchema);