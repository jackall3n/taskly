import {WunderlistService, ApiService} from "./";

export class TasksService {
    wunderlist = new WunderlistService(process.env.WUNDERLIST_CLIENT_ID, process.env.WUNDERLIST_CLIENT_SECRET);


    getAuth = () => {
        return this.wunderlist.getAuthorisationUrl();
    };

    accessToken = async () => {

    };
}