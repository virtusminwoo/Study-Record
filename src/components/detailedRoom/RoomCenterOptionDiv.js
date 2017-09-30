import React, { Component } from 'react';

class RoomCenterOptionDiv extends Component {
    render() {
        return (
            <div className="RoomCenterOptionDiv">
                <h3>옵션</h3>
                <br />
                <img src={require("../../images/roomOption.png")} alt="" />
            </div>
        );
    }
}

export default RoomCenterOptionDiv;