const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pieceSchema = new Schema({
    image: {
        type: String
    },
    artist: {
        type: String,
        required: true
    },
    title: {
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