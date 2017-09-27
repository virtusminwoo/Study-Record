import RoomSearchWrapper from '../components/roomSearch/RoomSearchWrapper';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    stateMarkerLat : state.stateMarkerLat,
    stateMarkerLng : state.stateMarkerLng
});


const mapDispatchToProps = (dispatch) => ({
    MouseOver0: () => dispatch(actions.MouseOver0()),
    MouseOut0: () => dispatch(actions.MouseOut0())
});

const ContainerRoomSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomSearchWrapper);


export default ContainerRoomSearch;