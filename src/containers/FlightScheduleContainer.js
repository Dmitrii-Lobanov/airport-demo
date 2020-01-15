import { connect } from 'react-redux';
import Schedule from '../components/Schedule';
import displaySchedule from '../store/reducers/schedule.js';

const mapStateToProps = state => {
    return { 
        data: state.schedule
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(displaySchedule(ownProps.filter))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule)