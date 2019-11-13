module.exports = function(app) {

    app.post('FORM', 
      passport.authenticate('openid', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });
    
    
      app.get('FORM/return', 
      passport.authenticate('openid', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });
    
    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
    }