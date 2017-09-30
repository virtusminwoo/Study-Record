import React from 'react';

import ContainerHeader from './ContainerHeader'
import ProductNavLeftTable from '../components/roomSearch/ProductNavLeftTable'
import ProductNavRight from '../components/roomSearch/ProductNavRight';
import RoomSearchGoogleMap from '../components/roomSearch/RoomSearchGoogleMap'
import RoomListResult from '../components/roomSearch/RoomListResult'
import RoomListAd from '../components/roomSearch/RoomListAd'
import RoomListTable from '../components/roomSearch/RoomListTable'

const RoomSearchWrapper = ({stateMarkerLat, stateMarkerLng, MouseOver0, MouseOver1, MouseOver2, MouseOver3, MouseOver4, MouseOver5, MouseOver6, MouseOver7, MouseOver8, MouseOver9, MouseOut}) => {
    return (
        <div className="RoomSearchWrapper">

            <ContainerHeader />

            <div className="ProductNav">
                <ProductNavLeftTable />
                <ProductNavRight />
            </div>

            <RoomSearchGoogleMap markLat={stateMarkerLat} markLng={stateMarkerLng}/>

            <div className="RoomListDiv">
                <RoomListResult p={"검색결과 10개"}/>
                <div className="RoomListOverFlow">
                <RoomListAd p={"이 지역 추천 공인 중개업소 매물"} ad={"광고"}/>
                <RoomListTable MouseOver0={MouseOver0} MouseOver1={MouseOver1} MouseOver2={MouseOver2} MouseOver3={MouseOver3} MouseOver4={MouseOver4} MouseOver5={MouseOver5} MouseOver6={MouseOver6} MouseOver7={MouseOver7} MouseOver8={MouseOver8} MouseOver9={MouseOver9} MouseOut={MouseOut}/>
                </div>
            </div>
        </div>
    );
};


RoomSearchWrapper.defaultProps = {
    stateMarkerLat : '',
    stateMarkerLng : ''
};



export default RoomSearchWrapper;