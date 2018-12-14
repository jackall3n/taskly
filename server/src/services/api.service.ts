import axios from 'axios';

export class ApiService {
    static get = async (url: string, options: any) => {
        let request_options = {
            url,
            ...options
        };

        try {
            return await ApiService.request('GET', request_options);
        } catch (e) {
            throw e
        }
    };

    static post = async (url: string, options: any) => {
        let request_options = {
            url,
            ...options
        };

        try {
            return await ApiService.request('POST', request_options);
        } catch (e) {
            throw e
        }
    };

    static request = async (method: 'GET' | 'POST', options: any) => {

        let request_options = {
            method,
            ...options
        };

        try {
            const response = await axios.request(request_options);

            return response.data;
        } catch (e) {
            throw e
        }
    }
}