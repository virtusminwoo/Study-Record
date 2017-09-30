import ContainerRoomSearch from './ContainerRoomSearch';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    stateMarkerLat : state.markerData.stateMarkerLat,
    stateMarkerLng : state.markerData.stateMarkerLng
});


const mapDispatchToProps = (dispatch) => ({
    MouseOver0: () => dispatch(actions.MouseOver0()),
    MouseOver1: () => dispatch(actions.MouseOver1()),
    MouseOver2: () => dispatch(actions.MouseOver2()),
    MouseOver3: () => dispatch(actions.MouseOver3()),
    MouseOver4: () => dispatch(actions.MouseOver4()),
    MouseOver5: () => dispatch(actions.MouseOver5()),
    MouseOver6: () => dispatch(actions.MouseOver6()),
    MouseOver7: () => dispatch(actions.MouseOver7()),
    MouseOver8: () => dispatch(actions.MouseOver8()),
    MouseOver9: () => dispatch(actions.MouseOver9()),
    MouseOut: () => dispatch(actions.MouseOut())
});

const ReduxRoomSearchWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerRoomSearch);


export default ReduxRoomSearchWrapper;