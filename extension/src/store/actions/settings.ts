export function openSettings(tab = 0) {
    return {
        type: "SETTINGS/OPEN",
        tab
    }
}

export function closeSettings() {
    return {
        type: "SETTINGS/CLOSE"
    }
}

export function setSettingsTab(tab) {
    return {
        type: "SETTINGS/SET_TAB",
        tab
    }
}

export function updateTravel(name, value) {
    return {
        type: "SETTINGS/UPDATE_TRAVEL",
        name,
        value
    }
}

export function updateArtwork(name, value) {
    return {
        type: "SETTINGS/UPDATE_ARTWORK",
        name,
        value
    }
}

export function toggleTaskList(list_id) {
    return {
        type: "SETTINGS/TOGGLE_TASK_LIST",
        list_id
    }
}