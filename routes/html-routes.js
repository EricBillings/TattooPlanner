let path = require("path");


module.exports = function (app) {

  function checkAuth (req,res,next){
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/')
};

  function checkNotAuth(req,res,next){
    if(req.isAuthenticated()){
      res.redirect('/details')
    }
    next()
  }

  app.get("/details",checkAuth, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/details.html"));
  });

  app.get("/",checkNotAuth, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};