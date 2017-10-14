import React,{Component} from 'react';
import { connect } from 'react-redux';
import './index.css'


import LayoutHeader from '../layoutHeader'
import Nav from '../../components/roomSearch/nav'
import GoogleMap from '../../components/roomSearch/googleMap'
import RoomList from '../../components/roomSearch/roomList'
import RoomListTable from '../../components/roomSearch/roomListTable'

class LayoutRoomSearch extends Component { 
    constructor(){
         super();
         this.state={
             stateMarkerLat : '',
             stateMarkerLng : ''
         }
    }
 
     MouseOver(e){
         this.setState({
             stateMarkerLat : e.target.dataset.markerlat,
             stateMarkerLng : e.target.dataset.markerlng
         })
     }
     
     MouseOut(){
         this.setState({
             stateMarkerLat : '',
             stateMarkerLng : ''
         })
     }

    render(){

    const RoomListTableTdData = this.props.rooms.map((room, i) =>
                <RoomListTable key = {i} rooms = {room} onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)} />
            )

        return (
            <div className="layoutRoomSearch">
                <LayoutHeader />
                <Nav />
                <GoogleMap markLat={this.state.stateMarkerLat} markLng={this.state.stateMarkerLng} />
                <RoomList RoomListTableTdData={RoomListTableTdData}/>
            </div>
            )
        }
    }

const mapStateToProps = (state) => ({
    rooms: state.roomsInfoData.rooms
});


LayoutRoomSearch = connect(
    mapStateToProps
)(LayoutRoomSearch);


export default LayoutRoomSearch;