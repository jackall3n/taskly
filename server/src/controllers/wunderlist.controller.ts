import * as e from "express"
import {Controller} from "../utils/decorators/controller";
import {Get, Post, Delete} from "../utils/decorators";
import {AuthRequest} from "../interfaces/auth-request";
import {TasksService} from "../services";

@Controller()
export class WunderlistController {
    tasks_service = new TasksService();

    @Get('/token', {authorise: false})
    async get(request: AuthRequest, response: e.Response): Promise<void> {
        const access_token = await this.tasks_service.wunderlist.accessToken(request.query.code);

        response.send({
            ...access_token,
            state: request.query.state
        })
    }

    @Get('/authorise', {authorise: false})
    async wunderlist(request: AuthRequest, response: e.Response): Promise<void> {
        response.redirect(this.tasks_service.wunderlist.getAuthorisationUrl(request.query.state))
    }

    @Get('/redirect', {authorise: false})
    async get_token(request: AuthRequest, response: e.Response): Promise<void> {
        const state = 'MY_NAME_IS_JACK_ALLEN';

        response.send({
            url: `${process.env.URL}/wunderlist/authorise?state=${state}`
        })
    }
}