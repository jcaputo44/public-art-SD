const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const pieceSchema = new Schema({
    image: {
        type: String
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
    year: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      }
    },
    media: {
      type: String,
    },
    comments: [commentSchema]
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Piece', pieceSchema);