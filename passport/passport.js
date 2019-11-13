function Passport() {
    var passport = require("passport")
        , util = require("../utils")
        , openIDStrategy = require("passport-openid").Strategy

    //Passport Session Setup

    passport.serializeUser(function (user, done) {
        done(null, user.identifier);
    });

    passport.deserializeUser(function (user, done) {
        done(null, { identifier: identifier });
    });


    //Use OpenIDStrategy 

    passport.use(new openIDStrategy({
        returnURL: "http://" + USERETURNROUTE,
        realm: "http://" + USELOCALVAR,
    },
        function (identifier, done) {
            process.nextTick(function () {
                return done(null, { identifier: identifier })
            })
        }))

}

module.exports = Passport