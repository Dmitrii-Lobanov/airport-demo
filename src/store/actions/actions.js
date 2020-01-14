import actionTypes from '../actions/actionTypes';

const goTo = component => (
    {
        type: actionTypes.GO_TO,
        component
    }
)

export default {
    goTo
}