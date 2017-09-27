import React, { Component } from 'react';
import HeaderGroup from '../HeaderGroup';
import RoomCenterOptionDiv from './RoomCenterOptionDiv'
import RoomCenterGoogleMapDiv from './RoomCenterGoogleMapDiv'
import FooterGroup from '../FooterGroup'
import detailedRoomsAPI from '../../data/detailedRoomsAPI'


//컴포넌트 props 전달되면 지울것
import Swiper from 'react-id-swiper';
import './slidePhoto.css'
import './detailedRoom.css';



const DetailedRoomWrapper = (props) => {
  const room = detailedRoomsAPI.get(
    parseInt(props.match.params.id, 10)
  )

  


  function roomDesc(props){
      const rooms = room.detailedDescription.map((room, index) => 
                <p key={index}>{room}</p>
            )
            return (
                <p>{rooms}</p>
            )     
  }


    const params = {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: true
        };


        return (
            console.log(),
            <div className="DetailedRoomWrapper">
                <HeaderGroup />
                <hr className="HeaderGroupHr" />
                <div className="PhotoSlideDiv">
                    <Swiper className=".swiper-container" {...params}>
                       <div><img src={require("../../images/R1/R1_1.png")} alt="" /></div>
                       <div><img src={require("../../images/R1/R1_2.png")} alt="" /></div>
                       <div><img src={require("../../images/R1/R1_3.png")} alt="" /></div>
                       <div><img src={require("../../images/R1/R1_4.png")} alt="" /></div>
                       <div><img src={require("../../images/R1/R1_5.png")} alt="" /></div>
                       <div><img src={require("../../images/R1/R1_6.png")} alt="" /></div>
                    </Swiper>
                </div>
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
                <RoomCenterOptionDiv />
                <div className="RoomCenterDetailedDescription">
                    <hr />
                    <br />
                    <h3>상세설명</h3>
                    {roomDesc()}
                    
                    <br />
                    <hr />
                </div>
                <RoomCenterGoogleMapDiv markLat={room.markerLat} markLng={room.markerLng}/>
                <div className="FixedRightDescriptionDiv">
                    <div className="FixedRightDescriptionDivTop">
                        <div className="FixedRightDescriptionDivTopRoom">
                            <h3>{room.buildingType}</h3> <h3>{room.rentType}</h3><h3>{room.depositFee}만원</h3>
                            <p>{room.shortDescription}</p>
                            <p>{room.domicile}</p>
                            <p>{room.hashDescription}</p>
                            <br />
                            <hr />
                            <br />
                        </div>
                        <div className="FixedRightDescriptionDivTopRoom">
                            <div className="FixedRightDescriptionDivTopRoom">
                                <div className="FixedRightDescriptionButton">
                                    <p> ♥ 찜 </p>
                                </div>
                                
                                <div className="FixedRightDescriptionButton">
                                    <p> 신고 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FixedRightDescriptionDivBottom">
                        <div className="FixedRightDescriptionDivBottomBackground">
                            <div className="FixedRightDescriptionDivBottomDealer">
                                <h3>{room.dealerInc}</h3>
                                <p>대표 : {room.dealerIncCEO}</p>
                                <p>[담당자] {room.dealer}</p>
                                <p>{room.dealerIncDomicile}</p>
                                <p>중개등록번호 {room.registrationNumber}</p>
                                <p>중개사와의 거래 시 수수료가 발생하니 참고하세요</p>
                            </div>
                            <div className="FixedRightDescriptionDivBottomDealerPhone">
                                <p> ☎ 연락처보기 </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="detailedRoomFooterDiv">
                    <FooterGroup />
                </div>
            </div>
        );
    }



export default DetailedRoomWrapper;