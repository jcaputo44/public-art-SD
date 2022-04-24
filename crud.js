require('dotenv').config();
require('./config/database');

const Piece = require('./models/piece');


let pieces;

Piece.find({}, function(err, pieceDocs) {
  pieces = pieceDocs;
});