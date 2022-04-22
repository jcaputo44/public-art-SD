var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Public Art SD'});
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/pieces',
    failureRedirect: '/pieces'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/pieces');
});

module.exports = router;
