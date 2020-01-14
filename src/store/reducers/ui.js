import {GO_TO} from '../actions/actionTypes';
import actions from '../actions/actions'

export const ui = (state = {}, action) => {
    switch(action.type){
        case GO_TO:
            return actions.goTo;
        default:
            return state;
    }
};

export default ui;