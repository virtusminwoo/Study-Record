import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import RoomAPI from '../../data/detailedRoomsAPI'

import RoomRoster from './RoomRoster'

class RoomListTable extends Component{
    render(){
        
        return (
            <div>
                <ul>
                    {
                        RoomAPI.all().map(data => (
                        <li key={data.id}>
                            <Link target="_blank" to={`/roomsearch/${data.id}`}>{data.buildingType}</Link>
                        </li>
                        ))
                    }  
                </ul>
                <RoomRoster />
                
            <table className="RoomListTable">
                <tr><td><Link to={"/detailedroom/1"}><img src={require("../../images/animalProduct.png")} alt="" /><h3 className="se">월세</h3><h3 className="price">1000/100</h3><p className="roomDescription">오피스텔 | 10층 | 24.6㎡ | 관리비 0만원</p><p className="roomPrivateDesctiption">★신축오피스텔★</p></Link></td></tr>
                <tr><td><Link to={"/detailedroom/2"}><img src={require("../../images/animalProduct.png")} alt="" /><h3 className="se">월세</h3><h3 className="price">85/85</h3><p className="roomDescription">원룸 | 2층 | 29.7㎡ | 관리비 0만원</p><p className="roomPrivateDesctiption">강남역5분거리 깔끔한 여성분 추천 단기방</p></Link></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
        </table>
        </div>
        );
    }
}

export default RoomListTable;