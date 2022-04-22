var express = require('express');
var router = express.Router();
const piecesCtrl = require('../controllers/pieces');
const isLoggedIn = require('../config/auth');


/* GET users listing. */
router.get('/', piecesCtrl.index);

module.exports = router;