var express = require('express');
var router = express.Router();
const piecesCtrl = require('../controllers/pieces');
const isLoggedIn = require('../config/auth');


/* GET users listing. */
router.get('/', piecesCtrl.index);
router.get('/new', isLoggedIn, piecesCtrl.new);
router.get('/:id', piecesCtrl.show);
router.post('/', isLoggedIn, piecesCtrl.create);


module.exports = router;
