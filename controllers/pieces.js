const Piece = require('../models/piece');

module.exports = {
  index,
  new: newPiece,
  show,
  create,
  edit,
  update
}

function update(req, res) {
  req.body.currentlyAvailable = !!req.body.currentlyAvailable;
  console.log(req.body);
  Piece.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true },
    function (err, piece) {
      console.log(err);
      if (err || !piece) return res.redirect('/pieces');
      res.redirect(`/pieces/${piece._id}`);
    }
  );
}

function edit(req, res) {
  Piece.findOne({ _id: req.params.id, user: req.user._id }, function (err, piece) {
    if (err || !piece) return res.redirect('/pieces');
    res.render('pieces/edit', { piece });
  });
}

function create(req, res) {
  req.body.currentlyAvailable = !!req.body.currentlyAvailable;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  req.body.user = req.user._id;
  var piece = new Piece(req.body);
  piece.save(function (err) {
    if (err) return res.redirect('/pieces/new');
    console.log(piece);
    res.redirect(`/pieces/${piece._id}`);
  });
}

function show(req, res) {
  Piece.findById(req.params.id)
    .exec(function (err, piece) {
      res.render('pieces/show', { title: 'Piece Details', piece });
    })
}

function newPiece(req, res) {
  res.render('pieces/new', { title: 'Add Piece' });
}

function index(req, res) {
  Piece.find({}, function (err, pieces) {
    res.render('pieces/index', { title: 'Public Art SD', pieces });
  });
}