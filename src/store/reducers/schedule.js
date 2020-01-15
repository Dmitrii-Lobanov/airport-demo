import { SET_SCHEDULE_FILTER,  
        GET_DATA } 
    from '../actions/actionTypes';
import data from '../../data/data.json';

//const data = 'Hi';

export const displaySchedule = (state = data, action) => {
    switch(action.type){
        case GET_DATA:
            return state;
        case SET_SCHEDULE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default displaySchedule;