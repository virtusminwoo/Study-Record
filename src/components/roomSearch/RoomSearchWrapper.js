import React, { Component } from 'react';
import HeaderRoomSearch from './HeaderRoomSearch'
import ProductNav from './ProductNav'
import RoomSearchGoogleMap from './RoomSearchGoogleMap'
import RoomListDiv from './RoomListDiv'


class RoomSearchWrapper extends Component {
    render() {
        return (
            <div className="RoomSearchWrapper">
                <HeaderRoomSearch />
                <ProductNav />
                <RoomSearchGoogleMap />
                <RoomListDiv />
            </div>
        );
    }
}

export default RoomSearchWrapper;