import {all} from "redux-saga/effects";
import {onFetchArtwork} from "./artwork";
import {onFetchTasks} from "./tasks";

export default function* rootSaga() {
    yield all([
        onFetchArtwork(),
        onFetchTasks()
    ])
}