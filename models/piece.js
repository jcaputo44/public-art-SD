const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pieceSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      }
    },
    mpaaRating: {
      type: String,
      enum: ['G', 'PG', 'PG-13', 'R']
    },
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Piece', pieceSchema);