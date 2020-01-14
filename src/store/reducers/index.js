import { combineReducers } from 'redux';
import ui from '../reducers/ui';
import schedule from './schedule';

export default combineReducers({
    ui,
    schedule
});