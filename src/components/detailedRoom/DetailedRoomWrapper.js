import React, { Component } from 'react';
import HeaderGroup from '../HeaderGroup';
import PhotoSlideDiv from './PhotoSlideDiv';
import RoomCenterDescriptionTableDiv from './RoomCenterDescriptionTableDiv'
import RoomCenterOptionDiv from './RoomCenterOptionDiv'
import RoomCenterDetailedDescriptionDiv from './RoomCenterDetailedDescriptionDiv'
import RoomCenterGoogleMapDiv from './RoomCenterGoogleMapDiv'
import FixedRightDescriptionDiv from './FixedRightDescriptionDiv'
import FooterGroup from '../FooterGroup'

import detailedRoomsAPI from '../../data/detailedRoomsAPI'


//컴포넌트 props 전달되면 지울것
import FixedRightDescriptionDivTopButtonDiv from './FixedRightDescriptionDivTopButtonDiv'
import FixedRightDescriptionDivBottomDealerPhone from './FixedRightDescriptionDivBottomDealerPhone'
import PhotoSlide from './PhotoSlide'
import Swiper from 'react-id-swiper';
import './slidePhoto.css'




const DetailedRoomWrapper = (props) => {
  const room = detailedRoomsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!room) {
    return <div>Sorry, but the room was not found</div>
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
            console.log(room.roomPhoto[0]),
            <div className="DetailedRoomWrapper">
                <HeaderGroup />
                <div className="PhotoSlideDiv">
                    <Swiper className=".swiper-container" {...params}>
                        <div><img src={require("../../images/R2/R2_1.png")} alt="" /></div>
                        <div>asdasd</div>
                        <div><img src={room.roomPhoto[2]} alt="" /></div>
                        <div>Slide 4</div>
                        <div>Slide 5</div>
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
                    {room.detailedDescription}
                    <br />
                    <hr />
                </div>
                <RoomCenterGoogleMapDiv />
                <div className="FixedRightDescriptionDiv">
                    <div className="FixedRightDescriptionDivTop">
                        <div className="FixedRightDescriptionDivTopRoom">
                        <h3>{room.buildingType}</h3> <h3>{room.rentType}</h3><h3>{room.depositFee}만원</h3>
                        <p>{room.shortDescription}</p>
                        <p>{room.domicile}</p>
                        <p>{room.hashDescription}</p>
                        <br />
                        <hr />
                        </div>
                        <div className="FixedRightDescriptionDivTopRoom">
                            <FixedRightDescriptionDivTopButtonDiv />
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
                            <FixedRightDescriptionDivBottomDealerPhone />
                        </div>
                    </div>
                    
                </div>
                <FooterGroup />
            </div>
        );
    }



export default DetailedRoomWrapper;