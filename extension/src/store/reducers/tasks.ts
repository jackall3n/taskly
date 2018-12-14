const initial_state = {
    loading: true,
    lists: [],
    tasks: []
};

export default function tasksReducer(state = initial_state, action) {
    switch (action.type) {
        case "TASKS/FETCH":
            return {...state, loading: true};
        case "TASKS/SET_TASKS":
            return {...state, tasks: [...state.tasks, ...action.tasks]};
        case "TASKS/SET_LISTS":
            return {...state, lists: [...state.lists, ...action.lists]};
        case "TASKS/LOADED":
            return {...state, loading: false};
        default:
            return state;
    }
}