import {ApiService} from "./api.service";
import * as moment from 'moment';

export class ArtworkService {

    static get = async (ignore_cache: boolean = false, search: string) => {
        const KEY = `artwork-${moment().format("YYYY-MM-DD")}`;

        const cached = localStorage.getItem(KEY);

        if (!ignore_cache && cached) {
            try {
                const parsed = JSON.parse(cached);

                console.log('cached', parsed);

                return parsed;
            } catch (e) {
                // Nothing
            }
        }

        try {
            const artwork = await ApiService.get('https://api.unsplash.com/photos/random', {
                params: {
                    client_id: 'ac9d59ac1dfb766d0f7aa1ced17b87ca62af29cfd53c2f94892ed7bf8f5e9b19',
                    query: search,
                    orientation: 'landscape'
                }
            });

            localStorage.setItem(KEY, JSON.stringify(artwork));

            console.log('server', artwork);

            return artwork;
        } catch (e) {
            throw e;
        }
    };

    deleteToday = () => {
        const KEY = `artwork-${moment().format("YYYY-MM-DD")}`;

        console.log('DELETING', KEY);

        localStorage.removeItem(KEY);
    }
}