import { combineReducers } from 'redux';
import settings from './settings';
import tasks from './tasks';
import artwork from './artwork';

export default combineReducers({
    settings,
    tasks,
    artwork
})