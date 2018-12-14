const initial_state = {
    loading: true
};

export default function artworkReducer(state = initial_state, action) {
    switch (action.type) {
        case "ARTWORK/FETCH":
            return {...state, loading: true};
        case "ARTWORK/SET":
            return {...state, details: action.artwork, loading: false};
        default:
            return state;
    }
}