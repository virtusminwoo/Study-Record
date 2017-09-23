import React, { Component } from 'react';
import RoomListResult from './RoomListResult';
import RoomListOverFlow from './RoomListOverFlow';

class RoomListDiv extends Component {
    render() {
        return (
            <div className="RoomListDiv">
                <RoomListResult />
                <RoomListOverFlow />
            </div>
        );
    }
}

export default RoomListDiv;