import * as e from "express"
import {Controller} from "../utils/decorators/controller";
import {Get, Post, Delete} from "../utils/decorators";
import {AuthRequest} from "../interfaces/auth-request";
import {TasksService} from "../services";

@Controller()
export class TasksController {
    tasks_service = new TasksService();

    @Get('/', { authorise: false })
    async get(request: AuthRequest, response: e.Response): Promise<void> {
        response.send('hi.')
    }
}