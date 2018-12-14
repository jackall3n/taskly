import * as e from "express";
import axios from 'axios';

import {Controller} from "../utils/decorators/controller";
import {Get} from "../utils/decorators";
import {AuthRequest} from "../interfaces/auth-request";

@Controller()
export class BaseController {

    @Get('/', {authorise: false})
    async get(request: AuthRequest, response: e.Response): Promise<void> {
        const result = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=ItR8CThPlicWrITU1W3JsT7z95DOFpoE&tag=funny&rating=R');

        response.send(`
            <div style="display: flex; justify-content: center; align-items: center;">
                <img style="width: 300px;" src="${result.data.data.image_original_url}" alt="damn"/>
            </div>
        `)
    }
}