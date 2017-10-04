import React from 'react';

import { Link } from 'react-router-dom';
import detailedRoomsAPI from '../../data/detailedRoomsAPI'

 const RoomListTable = ({stateMarkerLat, stateMarkerLng, MouseOver0, MouseOver1, MouseOver2, MouseOver3, MouseOver4, MouseOver5, MouseOver6, MouseOver7, MouseOver8, MouseOver9, MouseOut}) => {
    const API = detailedRoomsAPI
        return (
            <div>
                <table className="RoomListTable">
                    <tr ><Link to={"/detailedroom/1"} target="_blank"><td onMouseOver={MouseOver0} onMouseOut={MouseOut}><img  src={require("../../images/R1/R1_1.png")} alt="" /><h3 className="se">{API.rooms[0].rentType}</h3><h3 className="price">{API.rooms[0].depositFee}</h3><p className="roomDescription">{API.rooms[0].buildingType} | {API.rooms[0].theFloor}층 | {API.rooms[0].theArea}㎡ | 관리비 {API.rooms[0].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[0].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[0].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/2"} target="_blank"><td onMouseOver={MouseOver1} onMouseOut={MouseOut}><img  src={require("../../images/R2/R2_1.png")} alt="" /><h3 className="se">{API.rooms[1].rentType}</h3><h3 className="price">{API.rooms[1].depositFee}</h3><p className="roomDescription">{API.rooms[1].buildingType} | {API.rooms[1].theFloor}층 | {API.rooms[1].theArea}㎡ | 관리비 {API.rooms[1].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[1].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[1].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/3"} target="_blank"><td onMouseOver={MouseOver2} onMouseOut={MouseOut}><img  src={require("../../images/R3/R3_1.png")} alt="" /><h3 className="se">{API.rooms[2].rentType}</h3><h3 className="price">{API.rooms[2].depositFee}</h3><p className="roomDescription">{API.rooms[2].buildingType} | {API.rooms[2].theFloor}층 | {API.rooms[2].theArea}㎡ | 관리비 {API.rooms[2].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[2].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[2].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/4"} target="_blank"><td onMouseOver={MouseOver3} onMouseOut={MouseOut}><img  src={require("../../images/R4/R4_1.png")} alt="" /><h3 className="se">{API.rooms[3].rentType}</h3><h3 className="price">{API.rooms[3].depositFee}</h3><p className="roomDescription">{API.rooms[3].buildingType} | {API.rooms[3].theFloor}층 | {API.rooms[3].theArea}㎡ | 관리비 {API.rooms[3].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[3].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[3].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/5"} target="_blank"><td onMouseOver={MouseOver4} onMouseOut={MouseOut}><img  src={require("../../images/R5/R5_1.png")} alt="" /><h3 className="se">{API.rooms[4].rentType}</h3><h3 className="price">{API.rooms[4].depositFee}</h3><p className="roomDescription">{API.rooms[4].buildingType} | {API.rooms[4].theFloor}층 | {API.rooms[4].theArea}㎡ | 관리비 {API.rooms[4].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[4].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[4].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/6"} target="_blank"><td onMouseOver={MouseOver5} onMouseOut={MouseOut}><img  src={require("../../images/R6/R6_1.png")} alt="" /><h3 className="se">{API.rooms[5].rentType}</h3><h3 className="price">{API.rooms[5].depositFee}</h3><p className="roomDescription">{API.rooms[5].buildingType} | {API.rooms[5].theFloor}층 | {API.rooms[5].theArea}㎡ | 관리비 {API.rooms[5].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[5].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[5].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/7"} target="_blank"><td onMouseOver={MouseOver6} onMouseOut={MouseOut}><img  src={require("../../images/R7/R7_1.png")} alt="" /><h3 className="se">{API.rooms[6].rentType}</h3><h3 className="price">{API.rooms[6].depositFee}</h3><p className="roomDescription">{API.rooms[6].buildingType} | {API.rooms[6].theFloor}층 | {API.rooms[6].theArea}㎡ | 관리비 {API.rooms[6].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[6].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[6].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/8"} target="_blank"><td onMouseOver={MouseOver7} onMouseOut={MouseOut}><img  src={require("../../images/R8/R8_1.png")} alt="" /><h3 className="se">{API.rooms[7].rentType}</h3><h3 className="price">{API.rooms[7].depositFee}</h3><p className="roomDescription">{API.rooms[7].buildingType} | {API.rooms[7].theFloor}층 | {API.rooms[7].theArea}㎡ | 관리비 {API.rooms[7].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[7].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[7].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/9"} target="_blank"><td onMouseOver={MouseOver8} onMouseOut={MouseOut}><img  src={require("../../images/R9/R9_1.png")} alt="" /><h3 className="se">{API.rooms[8].rentType}</h3><h3 className="price">{API.rooms[8].depositFee}</h3><p className="roomDescription">{API.rooms[8].buildingType} | {API.rooms[8].theFloor}층 | {API.rooms[8].theArea}㎡ | 관리비 {API.rooms[8].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[8].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[8].shortDescription}</p></td></Link></tr>
                    <tr ><Link to={"/detailedroom/10"} target="_blank"><td onMouseOver={MouseOver9} onMouseOut={MouseOut}><img  src={require("../../images/R10/R10_1.png")} alt="" /><h3 className="se">{API.rooms[9].rentType}</h3><h3 className="price">{API.rooms[9].depositFee}</h3><p className="roomDescription">{API.rooms[9].buildingType} | {API.rooms[9].theFloor}층 | {API.rooms[9].theArea}㎡ | 관리비 {API.rooms[9].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[9].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[9].shortDescription}</p></td></Link></tr>
                </table>
            </div>
               

    );
};


RoomListTable.defaultProps = {
    stateMarkerLat : '',
    stateMarkerLng : ''
};



export default RoomListTable;