let db = require("../models");

module.exports = function (app) {

    app.get("/api/Customers", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.get("/api/Tattoos", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post("/api/Customers", function (req, res) {
        db.Post.create(req.body)
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.post("/api/Tattoos", function (req, res) {
        db.Post.create(req.body)
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.get("/api/Customers/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.get("/api/Tattoos/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.put("/api/Customers", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.put("/api/Tattoos", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.delete("/api/Customers/:id", function (req, res) {
        db.Post.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function (dbPost) {
            res.json(dbPost);
          });
      });
      app.delete("/api/Tattoos/:id", function (req, res) {
        db.Post.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function (dbPost) {
            res.json(dbPost);
          });
      });
      
}