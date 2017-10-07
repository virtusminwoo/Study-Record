import React from 'react';
import RoomListResult from './RoomListResult'
import RoomListAd from './RoomListAd'
import RoomListTable from './RoomListTable'

const RoomListDiv = (props) => {

        return(
            <div className="RoomListDiv">
            <RoomListResult />
            <div className="RoomListOverFlow">
            <RoomListAd />
            <RoomListTable RoomListTableTdData={props.RoomListTableTdData}/>
            </div>
        </div> 
        )
    }
    

export default RoomListDiv;