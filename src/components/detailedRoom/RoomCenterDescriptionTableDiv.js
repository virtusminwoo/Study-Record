//props로 room객체를 어떻게 전달할지 고민해보기

import React, { Component } from 'react';
import RoomCenterDescriptionTable from './RoomCenterDescriptionTable';
import detailedRoomsAPI from '../../data/detailedRoomsAPI'


const RoomCenterDescriptionTableDiv = (props) => {
  const room = detailedRoomsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!room) {
    return <div>Sorry, but the room was not found</div>
  }
    return (
            <div className="RoomCenterDescriptionTableDiv">
                <table>
                <caption>매물정보</caption>
                <tbody>
                    <tr><td>보증금/월세</td><th>{room.depositFee}</th><td className="RoomCenterDescriptionTableRight">방 종류</td><th>{room.buildingType}</th></tr>
                    <tr><td>해당 층 / 건물 층</td><th>{room.layers}</th><td className="RoomCenterDescriptionTableRight">전용 / 공급면적</td><th>{room.area}</th></tr>
                    <tr><td>관리비</td><th>{room.administrativeFee}</th><td className="RoomCenterDescriptionTableRight">관리비포함항목</td><th>{room.administrativeType}</th></tr>
                    <tr><td>난방종류</td><th>{room.heatingType}</th><td className="RoomCenterDescriptionTableRight">반려동물</td><th>{room.pet}</th></tr>
                    <tr><td>주차</td><th>{room.park}</th><td className="RoomCenterDescriptionTableRight">엘리베이터</td><th>{room.elevator}</th></tr>
                    <tr><td>입주가능일</td><th>{room.inToDay}</th><td className="RoomCenterDescriptionTableRight"></td><th></th></tr>
                </tbody>
            </table>
            </div>
        );
    }


export default RoomCenterDescriptionTableDiv;