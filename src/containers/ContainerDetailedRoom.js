import React from 'react';
import detailedRoomsAPI from '../data/detailedRoomsAPI'

import ContainerHeader from './ContainerHeader';
import PhotoSlideDiv from '../components/detailedRoom/PhotoSlideDiv'
import RoomCenterDescriptionTableDiv from '../components/detailedRoom/RoomCenterDescriptionTableDiv'
import RoomCenterOptionDiv from '../components/detailedRoom/RoomCenterOptionDiv'
import RoomCenterDetailedDescription from '../components/detailedRoom/RoomCenterDetailedDescription'
import RoomCenterGoogleMapDiv from '../components/detailedRoom/RoomCenterGoogleMapDiv'
import ContainerFixedRightDescriptionDiv from './ContainerFixedRightDescriptionDiv'
import ContainerFooter from './ContainerFooter'


const DetailedRoomWrapper = (props) => {

    const room = detailedRoomsAPI.get(
        parseInt(props.match.params.id, 10)
    )

    const roomDesc = function(props){
        const rooms = room.detailedDescription.map((room, index) => 
                <p key={index}>{room}</p>
            )
            return (
                <p>{rooms}</p>
            )     
    }
   
    return (
        console.log(room.roomPhoto),
        <div className="DetailedRoomWrapper">
            <ContainerHeader />
            <hr className="HeaderGroupHr" />
            <PhotoSlideDiv room={room} />
            <RoomCenterDescriptionTableDiv room={room}/>
            <RoomCenterOptionDiv />
            <RoomCenterDetailedDescription roomDesc={roomDesc()}/>
            <RoomCenterGoogleMapDiv markLat={room.markerLat} markLng={room.markerLng}/>
            <ContainerFixedRightDescriptionDiv room={room} />
            <ContainerFooter />
        </div>
    );
    }



export default DetailedRoomWrapper;