const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
const passport = require("passport")
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy;

const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (username, password, done) {
        console.log('fired')

        db.Customer.findOne({
            where: {
              email: username
            }
          }).then(user => {
            if (user) {
              const valid = user.validatePassword(password);
      
              if (valid) return done(null, user);
      
              return done(null, false);
            } else {
              done(null, false);
            }
          })
    }
));

passport.serializeUser(function (user, done) {
    console.log("serializing")
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("deserializing", id)
    done(null,id)
});

app.use(session({
    secret: 'UpsIkifsx84ohJuCzYLq0nWxOybpZxFa',
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

app.post('/',
    passport.authenticate('local', {
        successRedirect: '/details',
        failureRedirect: '/asdf'
        // failureFlash: true
    })
);

app.use(express.static("./public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);




//syncs models with database, will drop current database and recreate if exists
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;