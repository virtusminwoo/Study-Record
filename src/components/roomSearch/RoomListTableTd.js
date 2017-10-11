import React from 'react';
import { Link } from 'react-router-dom';

const RoomListTableTd = (props) => {

    const hashDatas= props.rooms.hashDescription.map((hashData,i) =>
        <div className="HashDescriptionDiv" key ={i} >{hashData}</div>
    )

    function rentTypeFunc(){
        if(props.rooms.rentType === "월세"){
            return true
        }
        return false
    }

    function rentalFee(){
        if(props.rooms.rentType === "월세")
            return '/' + props.rooms.rentalFee
    }

        return(
            <tr>
                <Link to={props.rooms.roomUrl} target="_blank">
                    <td id={props.rooms.markerLat} className={props.rooms.markerLng} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                        {props.rooms.roomPhoto[0]}
                        <h3 className="rentType">{props.rooms.rentType}</h3>
                        <h3 className={rentTypeFunc()? "depositFee depositFeeBlue" : "depositFee depositFeeOrange"} >{props.rooms.deposit}{rentalFee()}</h3>
                        <span className="roomDescription">{props.rooms.buildingType} | {props.rooms.theFloor}층 | {props.rooms.theArea}㎡ | 관리비 {props.rooms.administrativeFee}만원</span>
                        <span className="roomHashDescription">{hashDatas}</span><span className="roomPrivateDesctiption">{props.rooms.shortDescription}</span>
                    </td>
                </Link>
            </tr>
        )
    }

export default RoomListTableTd;