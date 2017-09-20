var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/',
  function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }
    res.render('account', {user: req.user});
});

router.get('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
});

router.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/users');
});

module.exports = router;
