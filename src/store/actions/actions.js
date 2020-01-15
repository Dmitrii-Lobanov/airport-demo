import { MOVE_TO, 
        ScheduleFilters, 
        SET_SCHEDULE_FILTER, 
        GET_DATA } 
    from '../actions/actionTypes';

const moveTo = component => (
    {
        type: MOVE_TO,
        payload: component
    }
)

const getData = data => (
    {
        type: GET_DATA,
        data
    }
)

const setScheduleFilter = filter => (
    {
        type: SET_SCHEDULE_FILTER,
        filter
    }
)



export default {
    moveTo,
    getData,
    setScheduleFilter
}