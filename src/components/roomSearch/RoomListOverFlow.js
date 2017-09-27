// 안씀

import React, { Component } from 'react';
import RoomListAd from './RoomListAd';
import RoomListTable from './RoomListTable';

class RoomListOverFlow extends Component {
    render() {
        return (
            <div className="RoomListOverFlow">
                <RoomListAd />
                <RoomListTable />
            </div>
        );
    }
}
  
export default RoomListOverFlow;