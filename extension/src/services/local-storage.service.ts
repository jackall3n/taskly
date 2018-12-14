export class LocalStorageService {
    static get = (key: string, default_value: any = null) => {
        const data = localStorage.getItem(key);
        if (!data) {
            return default_value
        }

        try {
            return JSON.parse(data);
        } catch (e) {
            return default_value;
        }
    };

    static set = (key: string, value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}