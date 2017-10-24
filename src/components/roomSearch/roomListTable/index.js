import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const RoomListTableTd = (props) => {

    const hashDatas= props.rooms.hashDescription.map((hashData,i) =>
        <div className="commonHashDescription" key ={i} >{hashData}</div>
    )

    function contractTypeFunc(){
        if(props.rooms.contractType === "월세"){
            return true
        }
        return false
    }

    function rentalFee(){
        if(props.rooms.contractType === "월세")
            return '/' + props.rooms.rentalFee
    }


    function houseValueFunc(){
        if(props.rooms.contractType === "매매"){
            return props.rooms.price
        } else {
            return props.rooms.deposit
        }
    }

    const toString = String(houseValueFunc())
    function depositToString(toString){
        if(toString.length >= 5){
            return toString.replace(/\B(?=(\d{4})+(?!\d))/g, "억");
        } else {
            return toString
        }
    }

        return(
            <tr>
                <Link to={props.rooms.roomUrl} target="_blank">
                    <td data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                        <img data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} src={props.rooms.roomPhoto[0]} alt=""/>
                        <h3 data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} className="contractType">{props.rooms.contractType}</h3>
                        <h3 data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} className={contractTypeFunc()? "price commonPriceColorBlue" : "price commonPriceColorOrange"} >{depositToString(toString)}{rentalFee()}</h3>
                        <span data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} className="roomDescription">{props.rooms.houseType} | {props.rooms.thisFloor}층 | {props.rooms.exclusiveArea}㎡ | 관리비 {props.rooms.managementExpenses}만원</span>
                        <span data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} className="roomHashDescription">{hashDatas}</span><span data-markerlat={props.rooms.markerLat} data-markerlng={props.rooms.markerLng} className="roomSimpleDesctiption">{props.rooms.shortDescription}</span>
                    </td>
                </Link>
            </tr>
        )
    }

export default RoomListTableTd;