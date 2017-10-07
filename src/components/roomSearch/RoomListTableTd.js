import React from 'react';
import { Link } from 'react-router-dom';

const RoomListTableTd = (props) => {

    const hashDatas= props.rooms.hashDescription.map((hashData,i) =>
        <div className="HashDescriptionDiv" key ={i} >{hashData}</div>
    )

        return(
            <Link to={props.rooms.roomUrl} target="_blank">
                <td id={props.rooms.markerLat} className={props.rooms.markerLng} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    {props.rooms.roomPhoto[0]}
                    <h3 className="rentType">{props.rooms.rentType}</h3>
                    <h3 className="depositFee">{props.rooms.depositFee}</h3>
                    <span className="roomDescription">{props.rooms.buildingType} | {props.rooms.theFloor}층 | {props.rooms.theArea}㎡ | 관리비 {props.rooms.administrativeFee}만원</span>
                    <span className="roomHashDescription">{hashDatas}</span><span className="roomPrivateDesctiption">{props.rooms.shortDescription}</span>
                </td>
            </Link>
        )
    }
    

export default RoomListTableTd;