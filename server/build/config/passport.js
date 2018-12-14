"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const _1 = require("./");
const schemas_1 = require("../database/schemas");
function default_1(passport) {
    let options = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: _1.default.auth.secret
    };
    passport.use(new passport_jwt_1.Strategy(options, (payload, done) => {
        schemas_1.User.findById(payload.id, (error, user) => {
            if (error) {
                console.log(error);
                return done(error, false);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
}
exports.default = default_1;
