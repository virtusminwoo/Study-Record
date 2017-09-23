// 데이터 전달로 인해 쓸지말지 고민


import React, { Component } from 'react';


class RoomCenterDescriptionTable extends Component {
    render() {
        return (
            <table>
                <caption>매물정보</caption>
                <tbody>
                    <tr><td>보증금/월세</td><th>300/47</th><td className="RoomCenterDescriptionTableRight">방 종류</td><th>원룸</th></tr>
                    <tr><td>해당 층 / 건물 층</td><th>2층 / 4층</th><td className="RoomCenterDescriptionTableRight">전용 / 공급면적</td><th>19.8m / 23m</th></tr>
                    <tr><td>관리비</td><th>3 만원</th><td className="RoomCenterDescriptionTableRight">관리비포함항목</td><th>유선 TV, 청소비, 수도세, 인터넷</th></tr>
                    <tr><td>난방종류</td><th>개별난방</th><td className="RoomCenterDescriptionTableRight">반려동물</td><th>불가능</th></tr>
                    <tr><td>주차</td><th>불가능</th><td className="RoomCenterDescriptionTableRight">엘리베이터</td><th>없음</th></tr>
                    <tr><td>입주가능일</td><th>즉시 입주</th><td className="RoomCenterDescriptionTableRight"></td><th></th></tr>
                </tbody>
            </table>
        );
    }
}

export default RoomCenterDescriptionTable;