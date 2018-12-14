import {LocalStorageService} from "../../services/local-storage.service";

const initial_state = {
    open: false,
    tab: 0,
    travel: {
        home: '',
        work: '',
        ...LocalStorageService.get('settings-travel', {})
    },
    artwork: {
        search: 'landscape',
        ...LocalStorageService.get('settings-artwork', {})
    },
    task_list: {
        lists: [],
        ...LocalStorageService.get('settings-task-list', {})
    }
};

export default function settingsReducer(state = initial_state, action) {
    let new_state;

    switch (action.type) {
        case "SETTINGS/OPEN":
            return {...state, open: true, tab: action.tab};
        case "SETTINGS/CLOSE":
            return {...state, open: false};
        case "SETTINGS/SET_TAB":
            return {...state, tab: action.tab};
        case "SETTINGS/UPDATE_TRAVEL":
            new_state = {...state, travel: {...state.travel, [action.name]: action.value}};
            LocalStorageService.set('settings-travel', new_state.travel);
            return new_state;
        case "SETTINGS/UPDATE_ARTWORK":
            new_state = {...state, artwork: {...state.artwork, [action.name]: action.value}};
            LocalStorageService.set('settings-artwork', new_state.artwork);
            return new_state;
        case "SETTINGS/TOGGLE_TASK_LIST":
            new_state = {...state};
            const index = state.task_list.lists.indexOf(action.list_id);

            if (index >= 0) {
                new_state.task_list.lists.splice(index, 1);
            } else {
                new_state.task_list.lists.push(action.list_id);
            }

            LocalStorageService.set('settings-task-list', new_state.task_list);
            return new_state;
        default:
            return state;
    }
}