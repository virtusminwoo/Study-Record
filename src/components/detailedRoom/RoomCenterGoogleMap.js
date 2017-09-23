import React, { Component } from 'react';

class RoomCenterGoogleMap extends Component {
    render() {
        return (
            <div className="RoomCenterGoogleMap">
                <h3>위치 및 주변 편의 시설</h3>
                <img src ={require("./roomMap.png")} alt="" />
            </div>
        );
    }
}

export default RoomCenterGoogleMap;