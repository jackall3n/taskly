import axios from 'axios';

export class ApiService {
    static get = async (url: string, options: any) => {

        let request_options = {
            ...options
        };

        try {
            const response = await axios.get(url, request_options);

            return response.data;
        } catch (e) {
            throw e
        }
    }
}