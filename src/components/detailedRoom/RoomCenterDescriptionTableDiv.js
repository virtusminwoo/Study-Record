import React from 'react';

const RoomCenterDescriptionTableDiv = (props) => {
        return (
            <div className="RoomCenterDescriptionTableDiv">
                    <table>
                        <caption>매물정보</caption>
                        <tbody>
                            <tr><td>보증금/월세</td><th>{props.room.depositFee}</th><td className="RoomCenterDescriptionTableRight">방 종류</td><th>{props.room.buildingType}</th></tr>
                            <tr><td>해당 층 / 건물 층</td><th>{props.room.theFloor}층 / {props.room.entireFloor}층</th><td className="RoomCenterDescriptionTableRight">전용 / 공급면적</td><th>{props.room.theArea}㎡ / {props.room.entireArea}㎡</th></tr>
                            <tr><td>관리비</td><th>{props.room.administrativeFee}만원</th><td className="RoomCenterDescriptionTableRight">관리비포함항목</td><th>{props.room.administrativeType}</th></tr>
                            <tr><td>난방종류</td><th>{props.room.heatingType}</th><td className="RoomCenterDescriptionTableRight">반려동물</td><th>{props.room.pet}</th></tr>
                            <tr><td>주차</td><th>{props.room.park}</th><td className="RoomCenterDescriptionTableRight">엘리베이터</td><th>{props.room.elevator}</th></tr>
                            <tr><td>입주가능일</td><th>{props.room.inToDay}</th><td className="RoomCenterDescriptionTableRight"></td><th></th></tr>
                        </tbody>
                    </table>
                </div>
        );
    }


export default RoomCenterDescriptionTableDiv;