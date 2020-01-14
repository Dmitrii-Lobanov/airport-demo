import {GET_SCHEDULE} from '../actions/actionTypes';
import actions from '../actions/actions'

export const schedule = (state = {}, action) => {
    switch(action.type){
        case GET_SCHEDULE:
            return [...state];
        default:
            return state;
    }
};

export default schedule;