//안씀

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


import RoomRoster from './RoomRoster'

import detailedRoomsAPI from '../../data/detailedRoomsAPI'

const RoomListTable = (props) => {
const Url = require('../../images/R2/R2_1.png')
const rooom = detailedRoomsAPI.all()
        return (
            <div>
                
                
            <table className="RoomListTable">
                
                <tr><td><Link to={"/detailedroom/1"}><img src={Url} alt="" /><h3 className="se">월세</h3><h3 className="price">{detailedRoomsAPI.rooms[0].depositFee}</h3><p className="roomDescription">{detailedRoomsAPI.rooms[0].buildingType} | {detailedRoomsAPI.rooms[0].nowLayers} | {detailedRoomsAPI.rooms[0].nowArea} | 관리비 {detailedRoomsAPI.rooms[0].administrativeFee}만원</p><p className="roomHashDescription">{detailedRoomsAPI.rooms[0].hashDescription}</p><p className="roomPrivateDesctiption">{detailedRoomsAPI.rooms[0].shortDescription}</p></Link></td></tr>
                <tr><td><Link to={"/detailedroom/2"}><img src={require("../../images/R2/R2_1.png")} alt="" /><h3 className="se">월세</h3><h3 className="price">{detailedRoomsAPI.rooms[1].depositFee}</h3><p className="roomDescription">{detailedRoomsAPI.rooms[1].buildingType} | {detailedRoomsAPI.rooms[1].nowLayers} | {detailedRoomsAPI.rooms[1].nowArea} | 관리비 {detailedRoomsAPI.rooms[1].administrativeFee}만원</p><p className="roomHashDescription">{detailedRoomsAPI.rooms[1].hashDescription}</p><p className="roomPrivateDesctiption">{detailedRoomsAPI.rooms[1].shortDescription}</p></Link></td></tr>
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

export default RoomListTable;