export function fetchTasks(list_ids) {
    return {
        type: "TASKS/FETCH",
        list_ids
    }
}

export function setTaskLists(lists) {
    return {
        type: "TASKS/SET_LISTS",
        lists
    }
}

export function setTasks(tasks) {
    return {
        type: "TASKS/SET_TASKS",
        tasks
    }
}

export function setTasksLoaded() {
    return {
        type: "TASKS/LOADED"
    }
}