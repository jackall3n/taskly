import {ApiService} from "./api.service";

export class WunderlistService {
    constructor(private client_id: string, private client_secret: string) {
    }

    getAuthorisationUrl = (state: string) => {
        const client_id = encodeURIComponent(this.client_id);
        const redirect_url = encodeURIComponent(`${process.env.URL}/wunderlist/token`);
        return `https://www.wunderlist.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&state=${state}`;
    };

    accessToken = async (code: string) => {
        return await ApiService.post('https://www.wunderlist.com/oauth/access_token', {
            data: {
                client_id: this.client_id,
                client_secret: this.client_secret,
                code
            }
        })
    };
}