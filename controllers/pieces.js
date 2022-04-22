const Piece = require('../models/piece');

module.exports = {
    index
}

function index(req, res) {
  res.render('pieces/index', {title: 'Public Art SD'});
  }