import {call, put, takeLatest} from "redux-saga/effects";
import {ArtworkService} from "../../services/artwork.service";
import {setArtwork} from "../actions/artwork";

export function* onFetchArtwork() {
    yield takeLatest('ARTWORK/FETCH', function* fetchArtwork(action: any) {
        try {
            const response = yield call(ArtworkService.get, action.ignore_cache, action.search);
            yield put(setArtwork(response));
        } catch (e) {
            // Handle fail
        }
    })
}