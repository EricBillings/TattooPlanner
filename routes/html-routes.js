let path = require("path");

module.exports = function (app) {
  app.get("/details", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/details.html"));
  });

  app.get("/signedin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signedin.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};