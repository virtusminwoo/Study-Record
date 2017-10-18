import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css'
import * as actions from '../../actions/roomsInfoActionCreators';


import LayoutHeader from '../layoutHeader'
import Nav from '../../components/roomSearch/nav'
import GoogleMap from '../../components/roomSearch/googleMap'
import RoomList from '../../components/roomSearch/roomList'
import RoomListTable from '../../components/roomSearch/roomListTable'

class LayoutRoomSearch extends Component { 
    
    render(){

    const RoomListTableTdData = this.props.rooms.map((room, i) =>
                <RoomListTable key = {i} rooms = {room} onMouseOver={this.props.MouseOver} onMouseOut={this.props.MouseOut} />
            )

        return (
            <div className="layoutRoomSearch">
                <LayoutHeader />
                <Nav />
                <GoogleMap markLat={this.props.stateMarkerLat} markLng={this.props.stateMarkerLng} />
                <RoomList RoomListTableTdData={RoomListTableTdData}/>
            </div>
            )
        }
    }

const mapStateToProps = (state) => ({
    rooms: state.roomsInfoData.rooms,
    stateMarkerLat: state.roomsInfoData.stateMarkerLat,
    stateMarkerLng: state.roomsInfoData.stateMarkerLng
});

const mapDispatchToProps = (dispatch) => ({
     MouseOver: (e) => dispatch(actions.MouseOver(e)),
     MouseOut: () => dispatch(actions.MouseOut())
});


LayoutRoomSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutRoomSearch);


export default LayoutRoomSearch;