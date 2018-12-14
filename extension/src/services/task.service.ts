import {ApiService} from "./api.service";

export class TaskService {
    static default_request_config = {
        baseURL: 'https://a.wunderlist.com/api/v1',
        headers: {
            'X-Access-Token': '864444f998e6978b3575fe7d2807b42a596b99b580736a52d16f55823470',
            'X-Client-ID': '481876ca5a6151b1d799'
        }
    };

    static getLists = async () => {
        return await ApiService.get('lists', TaskService.default_request_config);
    };

    static getAllTasks = async (list_ids: [number]) => {
        if (!list_ids) {
            return []
        }

        const task_lists = await Promise.all(list_ids.map(id => TaskService.getTasks(id, false)));

        return task_lists.map((tasks, index) => ({
            list_id: list_ids[index],
            tasks
        }));
    };

    static getTasks = async (list_id: number, completed: boolean) => {
        const request_config = {
            ...TaskService.default_request_config,
            params: {
                list_id,
                completed
            }
        };

        return await ApiService.get('tasks', request_config);
    };
}