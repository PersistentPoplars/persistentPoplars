var path = require('path');
var db = require('../db/dbConfig.js');

module.exports = function(app, express, passport) {



  app.post('/login', passport.authenticate('local-login'), function(req, res) {
    res.json({authenticated: true});
  });

  // app.post('/login', passport.authenticate('local-signup', {
  //   successRedirect: '/proposals', 
  //   failureRedirect: '/signup', 
  //   failureFlash: true })
  // );


  app.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/login', 
    failureRedirect: '/signup', 
    failureFlash: true })
  );








  app.get('/proposals', function(req, res) {
    db.Proposal.findAll().then(function(proposals) {
      console.log('proposals are: ', proposals);
      res.send(proposals);
    });
  });
/*
  app.get('/proposals/:id', function(req, res) {
    var id = req.params.id;
    db.Proposal.findOne({
        where: {
          id: id
        }
      })
  });
*/
  app.post('/proposals', function(req, res) {
    console.log(req.body);
    db.Proposal.create(req.body);
  });
  
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
  });

};

// function isLoggedIn(req, res, next) {
//     // if user is authenticated in the session, carry on
//     if (req.isAuthenticated())
//         return next();
//     // if they aren't redirect them to the home page
//     res.redirect('/login');
// }
