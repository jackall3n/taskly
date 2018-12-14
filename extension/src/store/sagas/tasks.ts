import {call, put, takeLatest} from "redux-saga/effects";
import {setTaskLists, setTasks, setTasksLoaded} from "../actions/tasks";
import {TaskService} from "../../services/task.service";

export function* onFetchTasks() {
    yield takeLatest('TASKS/FETCH', function* fetchTasks(action: any) {
        try {
            const lists_response = yield call(TaskService.getLists, action.ignore_cache);
            yield put(setTaskLists(lists_response));

            // const completed_tasks_response = yield call(TaskService.getTasks, 366934518, true);
            // yield put(setTasks(completed_tasks_response));

            const uncompleted_tasks_response = yield call(TaskService.getAllTasks, action.list_ids);
            yield put(setTasks(uncompleted_tasks_response));
            yield put(setTasksLoaded());
        } catch (e) {
            // Handle fail
        }
    })
}