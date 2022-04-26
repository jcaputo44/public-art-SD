const Piece = require('../models/piece');

module.exports = {
  create,
  delete: deleteComment
};

function deleteComment(req, res, next) {
  Piece.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(piece) {
    if (!piece) return res.redirect('/pieces');
    piece.comments.remove(req.params.id);
    piece.save().then(function() {
      res.redirect(`/pieces/${piece._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}


function create(req, res) {
  Piece.findById(req.params.id, function(err, piece) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar =  req.user.avatar;
    piece.comments.push(req.body);
    piece.save(function(err) {
      res.redirect(`/pieces/${req.params.id}`);
    });
  });
}