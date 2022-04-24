const Piece = require('../models/piece');

module.exports = {
    index,
    new: newPiece,
    show,
    create
}

function create(req, res) {
    req.body.currentlyAvailable = !!req.body.currentlyAvailable;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var piece = new Piece(req.body);
    piece.save(function(err) {
      if (err) return res.redirect('/pieces/new');
      console.log(piece);
      res.redirect(`/pieces/${piece._id}`);
    });
  }

function show(req, res) {
     res.render('pieces/show', { title: 'Piece Details' });

  }

function newPiece(req, res) {
    res.render('pieces/new', { title: 'Add Piece' });
  }

function index(req, res) {
  res.render('pieces/index', {title: 'Public Art SD'});
  }