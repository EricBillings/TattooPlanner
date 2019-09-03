let db = require("../models");

module.exports = function(app) {

    app.get("/api/Customers", function(req, res) {
        console.log(req.body);
        db.Customer.findAll({})
            .then(function(dbCustomer) {
                res.json(dbCustomer);
            });
    });
    app.get("/api/Tattoos", function(req, res) {
        db.Tattoo.findAll({})
            .then(function(dbTattoo) {
                res.json(dbTattoo);
            });
    });

    app.post("/api/Customers", function(req, res) {
        console.log(req.body)
        db.Customer.create(req.body)
            .then(function(dbCustomer) {
                res.json(dbCustomer);
            });
    });
    app.post("/api/Tattoos", function(req, res) {
        db.Tattoo.create(req.body)
            .then(function(dbTattoo) {
                res.json(dbTattoo);
            });
    });

    app.get("/api/Customers/:id", function(req, res) {
        db.Customer.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbCustomer) {
                res.json(dbCustomer);
            });
    });
    app.get("/api/Tattoos/:id", function(req, res) {
        db.Tattoo.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbTattoo) {
                res.json(dbTattoo);
            });
    });

    app.put("/api/Customers", function(req, res) {
        db.Customer.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(dbCustomer) {
                res.json(dbCustomer);
            });
    });
    app.put("/api/Tattoos", function(req, res) {
        db.Tattoo.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(dbTattoo) {
                res.json(dbTattoo);
            });
    });

    app.delete("/api/Customers/:id", function(req, res) {
        db.Customer.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbCustomer) {
                res.json(dbCustomer);
            });
    });
    app.delete("/api/Tattoos/:id", function(req, res) {
        db.Tattoo.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbTattoo) {
                res.json(dbTattoo);
            });
    });

}