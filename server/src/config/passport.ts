import {ExtractJwt, Strategy} from 'passport-jwt';
import config from "./";
import {User} from "../database/schemas";

export default function (passport: any) {
    let options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.auth.secret
    };

    passport.use(new Strategy(options, (payload, done) => {

        User.findById(payload.id, (error, user) => {
            if (error) {
                console.log(error);
                return done(error, false);
            }

            if (user) {
                return done(null, user)
            } else {
                return done(null, false);
            }
        })
    }))
}