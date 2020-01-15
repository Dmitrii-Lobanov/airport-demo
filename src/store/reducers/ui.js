import {MOVE_TO} from '../actions/actionTypes';

export const ui = (state = {}, action) => {
    switch(action.type){
        case MOVE_TO:
            return state;
        default:
            return state;
    }
};

export default ui;