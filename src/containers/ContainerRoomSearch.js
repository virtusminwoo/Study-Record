import React,{Component} from 'react';

import ContainerHeader from './ContainerHeader'
import ProductNav from '../components/roomSearch/ProductNav'
import RoomSearchGoogleMap from '../components/roomSearch/RoomSearchGoogleMap'
import RoomListDiv from '../components/roomSearch/RoomListDiv'
import RoomListTableTd from '../components/roomSearch/RoomListTableTd'
import roomsApi from '../data/roomsApi'

class ContainerRoomSearch extends Component { 
    constructor(){
         super();
         this.state={
             stateMarkerLat : '',
             stateMarkerLng : ''
         }
    }
 
     MouseOver(e){
         this.setState({
             stateMarkerLat : e.target.id,
             stateMarkerLng : e.target.className
         })
     }
     
     MouseOut(){
         this.setState({
             stateMarkerLat : '',
             stateMarkerLng : ''
         })
     }

    render(){

    const RoomListTableTdData = roomsApi.rooms.map((roomMap, i) =>
                <RoomListTableTd key = {i} rooms = {roomMap} onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)} />
            )

        return (
            <div className="ContainerRoomSearch">
                <ContainerHeader />
                <ProductNav />
                <RoomSearchGoogleMap markLat={this.state.stateMarkerLat} markLng={this.state.stateMarkerLng} />
                <RoomListDiv RoomListTableTdData={RoomListTableTdData}/>
            </div>
            )
        }
    }



export default ContainerRoomSearch;