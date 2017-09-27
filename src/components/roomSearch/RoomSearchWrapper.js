import React, { Component } from 'react';
import HeaderRoomSearch from './HeaderRoomSearch'
import ProductNav from './ProductNav'
import RoomSearchGoogleMap from './RoomSearchGoogleMap'
import RoomListDiv from './RoomListDiv'
import ProductNavRight from './ProductNavRight';
import CheckList1 from './CheckList1'
//컴포넌트 나누면 불필요
import { Link, Route } from 'react-router-dom';

import RoomAPI from '../../data/detailedRoomsAPI'

import detailedRoomsAPI from '../../data/detailedRoomsAPI'

class RoomSearchWrapper extends Component {
    constructor(){
        super();
        this.state={
            showDetails: false,
            stateMarkerLat : '',
            stateMarkerLng : ''
        }
    }

    MouseOver(e){
        this.setState({
            stateMarkerLat : e.target.id,
            stateMarkerLng : e.target.className
        }),
        console.log(this.state)
    }

    
    MouseOut(e){
        console.log(this.state),
        this.setState({
            stateMarkerLat : '',
            stateMarkerLng : ''
        })
    }
      


    render() {
        let cardDetails;
        if(this.state.showDetails){
            cardDetails=(
                <div>
                    <CheckList1 />
                </div>
            )
        }

        const API = detailedRoomsAPI


        return (
            <div className="RoomSearchWrapper">
                <HeaderRoomSearch />
                <div className="ProductNav">
                    <table className="ProductNavLeftTable">
                        <tr><td onClick={()=>this.setState({showDetails: !this.state.showDetails})}>매물종류</td><td>거래종류</td><td>방 종류</td><td>0 만원 ~ 무제한</td><td>0 만원 ~ 무제한</td><td>추가옵션</td></tr>
                    </table>
                    <ProductNavRight />
                </div>
                    {cardDetails}
                <RoomSearchGoogleMap markLat={this.state.stateMarkerLat} markLng={this.state.stateMarkerLng}/>


                <div className="RoomListDiv">
                    <div className="RoomListResult">
                        <p> 검색결과</p>
                    </div>


                    <div className="RoomListOverFlow">
                    <div className="RoomListAd">
                        <p> 이 지역 추천 공인 중개업소 매물</p>
                        <a href="#">광고</a>
                    </div>


                    <div>
                        
                        
                        <table className="RoomListTable">
                            <tr ><Link to={"/detailedroom/1"} ><td id={API.rooms[0].markerLat} className={API.rooms[0].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R1/R1_1.png")} alt="" /><h3 className="se">{API.rooms[0].rentType}</h3><h3 className="price">{API.rooms[0].depositFee}</h3><p className="roomDescription">{API.rooms[0].buildingType} | {API.rooms[0].nowLayers} | {API.rooms[0].nowArea} | 관리비 {API.rooms[0].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[0].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[0].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/2"} ><td id={API.rooms[1].markerLat} className={API.rooms[1].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R2/R2_1.png")} alt="" /><h3 className="se">{API.rooms[1].rentType}</h3><h3 className="price">{API.rooms[1].depositFee}</h3><p className="roomDescription">{API.rooms[1].buildingType} | {API.rooms[1].nowLayers} | {API.rooms[1].nowArea} | 관리비 {API.rooms[1].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[1].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[1].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/3"} ><td id={API.rooms[2].markerLat} className={API.rooms[2].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R3/R3_1.png")} alt="" /><h3 className="se">{API.rooms[2].rentType}</h3><h3 className="price">{API.rooms[2].depositFee}</h3><p className="roomDescription">{API.rooms[2].buildingType} | {API.rooms[2].nowLayers} | {API.rooms[2].nowArea} | 관리비 {API.rooms[2].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[2].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[2].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/4"} ><td id={API.rooms[3].markerLat} className={API.rooms[3].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R4/R4_1.png")} alt="" /><h3 className="se">{API.rooms[3].rentType}</h3><h3 className="price">{API.rooms[3].depositFee}</h3><p className="roomDescription">{API.rooms[3].buildingType} | {API.rooms[3].nowLayers} | {API.rooms[3].nowArea} | 관리비 {API.rooms[3].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[3].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[3].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/5"} ><td id={API.rooms[4].markerLat} className={API.rooms[4].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R5/R5_1.png")} alt="" /><h3 className="se">{API.rooms[4].rentType}</h3><h3 className="price">{API.rooms[4].depositFee}</h3><p className="roomDescription">{API.rooms[4].buildingType} | {API.rooms[4].nowLayers} | {API.rooms[4].nowArea} | 관리비 {API.rooms[4].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[4].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[4].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/6"} ><td id={API.rooms[5].markerLat} className={API.rooms[5].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R6/R6_1.png")} alt="" /><h3 className="se">{API.rooms[5].rentType}</h3><h3 className="price">{API.rooms[5].depositFee}</h3><p className="roomDescription">{API.rooms[5].buildingType} | {API.rooms[5].nowLayers} | {API.rooms[5].nowArea} | 관리비 {API.rooms[5].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[5].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[5].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/7"} ><td id={API.rooms[6].markerLat} className={API.rooms[6].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R7/R7_1.png")} alt="" /><h3 className="se">{API.rooms[6].rentType}</h3><h3 className="price">{API.rooms[6].depositFee}</h3><p className="roomDescription">{API.rooms[6].buildingType} | {API.rooms[6].nowLayers} | {API.rooms[6].nowArea} | 관리비 {API.rooms[6].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[6].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[6].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/8"} ><td id={API.rooms[7].markerLat} className={API.rooms[7].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R8/R8_1.png")} alt="" /><h3 className="se">{API.rooms[7].rentType}</h3><h3 className="price">{API.rooms[7].depositFee}</h3><p className="roomDescription">{API.rooms[7].buildingType} | {API.rooms[7].nowLayers} | {API.rooms[7].nowArea} | 관리비 {API.rooms[7].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[7].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[7].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/9"} ><td id={API.rooms[8].markerLat} className={API.rooms[8].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R9/R9_1.png")} alt="" /><h3 className="se">{API.rooms[8].rentType}</h3><h3 className="price">{API.rooms[8].depositFee}</h3><p className="roomDescription">{API.rooms[8].buildingType} | {API.rooms[8].nowLayers} | {API.rooms[8].nowArea} | 관리비 {API.rooms[8].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[8].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[8].shortDescription}</p></td></Link></tr>
                            <tr ><Link to={"/detailedroom/10"} ><td id={API.rooms[9].markerLat} className={API.rooms[9].markerLng}  onMouseOver={this.MouseOver.bind(this)} onMouseOut={this.MouseOut.bind(this)}><img  src={require("../../images/R10/R10_1.png")} alt="" /><h3 className="se">{API.rooms[9].rentType}</h3><h3 className="price">{API.rooms[9].depositFee}</h3><p className="roomDescription">{API.rooms[9].buildingType} | {API.rooms[9].nowLayers} | {API.rooms[9].nowArea} | 관리비 {API.rooms[9].administrativeFee}만원</p><p className="roomHashDescription">{API.rooms[9].hashDescription}</p><p className="roomPrivateDesctiption">{API.rooms[9].shortDescription}</p></td></Link></tr>
                            
                    </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomSearchWrapper;