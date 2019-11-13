var path = require("path");

module.exports = function(app) {

app.get('/', function(req, res){
    res.render(path.join(__dirname, "/../client/public/index.html"), { user: req.user });
  });
  
  app.get('/SIGNUPPAGE', ensureAuthenticated, function(req, res){
    res.render(path.join(__dirname, "/../client/public/SIGNUP.html"), { user: req.user });
  });
  
  app.get('/login', function(req, res){
    res.render(path.join(__dirname, "/../client/public/LOGIN.html"), { user: req.user });
  });
};