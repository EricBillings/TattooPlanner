const db = require("../../models");

const tattoos = [{
        text: "marine tattoo",
        font: "tangerine",
        location: "chest",
        colors: "#000000",
        size: "m",
        specs: "make it right"
    },
    {
        text: "girlfriend tatto",
        font: "lobster",
        location: "back",
        colors: "#0000FF",
        size: "l",
        specs: "multicolor"
    },
    {
        text: "motorcyle tattoo",
        font: "lemonada",
        location: "arm",
        colors: "#006400",
        size: "s",
        specs: "vertical"
    },
    {
        text: "mom tattoo",
        font: "wire one",
        location: "leg",
        colors: "#8B008B",
        size: "m",
        specs: "inverted"
    },
    {
        text: "dog tatto",
        font: "snowburst one",
        location: "chest",
        colors: "#483D8B",
        size: "m",
        specs: "with paw print"
    }

];

db.sequelize.sync({ force: true }).then(function() {
    db.Tattoo.bulkCreate(tattoos).then(function(rows) {
            console.log(`\n${rows.length} Rows Inserted`);

        })
        .catch(function(err) {
            console.log(`\nError:`, err);
        });
});


const Customers = [

    {
        email: "tattooguy@yahoo.com",
        password: "password1"
    },
    {
        email: "tattoogirl@yahoo.com",
        password: "password2"
    },
    {
        email: "tattooman@yahoo.com",
        password: "password3"
    },
    {
        email: "tattoolady@yahoo.com",
        password: "password4"
    },
    {
        email: "tattoofemale@yahoo.com",
        password: "password5"
    },
    {
        email: "tattooshop@yahoo.com",
        password: "admin",
        userType: "admin"
    }

];

db.sequelize.sync({ force: true }).then(function() {
    db.Customer.bulkCreate(Customers).then(function(rows) {
            console.log(`\n${rows.length} Rows Inserted`);

        })
        .catch(function(err) {
            console.log(`\nError:`, err);
        });
});