export function fetchArtwork(ignore_cache, search) {
    return {
        type: "ARTWORK/FETCH",
        ignore_cache,
        search
    }
}

export function setArtwork(artwork) {
    return {
        type: "ARTWORK/SET",
        artwork
    }
}