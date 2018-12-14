import * as e from "express"
import * as jwt from 'jsonwebtoken';
import configuration from '../config';

import {Controller} from "../utils/decorators/controller";
import {Post} from "../utils/decorators";
import {User} from "../database/schemas";

@Controller()
export class AuthController {

    @Post('/login', {authorise: false})
    async login(request: e.Request, response: e.Response): Promise<void> {
        let {
            username,
            password
        } = request.body;

        if (!username || !password) {
            response.status(400).send({
                reason: "INVALID_REQUEST",
                success: false
            });

            return
        }

        try {
            const user = await User.findOne({username}).exec();

            if (!user) {
                response.status(404).send({
                    reason: "USER_NOT_FOUND",
                    success: false
                });

                return;
            }

            const password_match = await user.comparePassword(password);
            if (!password_match) {
                response.status(404).send({
                    reason: "INVALID_CREDENTIALS",
                    success: false
                });
                return;
            }

            let token = jwt.sign({id: user._id}, configuration.auth.secret, {
                expiresIn: '2 days'
            });

            response.send({
                username,
                token,
                success: true
            });

            return;
        } catch (e) {
            response.status(404).send({
                reason: 'SERVER_ERROR',
                success: false
            });

            return;
        }
    }

    @Post('/register', {authorise: false})
    async register(request: e.Request, response: e.Response): Promise<void> {

        let {
            username,
            password
        } = request.body;

        if (!username || !password) {
            response.status(400).send({
                reason: "INVALID_REQUEST",
                success: false
            });

            return
        }

        let user = new User({
            username,
            password
        });

        try {
            const result = await user.save();

            let token = jwt.sign({id: result._id}, configuration.auth.secret, {
                expiresIn: '2 days'
            });

            response.send({
                username,
                token,
                success: true
            })

        } catch (e) {
            response.status(500).send({
                reason: 'SERVER_ERROR',
                success: false
            });
        }
    }
}