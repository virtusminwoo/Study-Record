import React, { Component } from 'react';
import NavRoomGroup from './NavRoomGroup';
import NavLoginGroup from './NavLoginGroup';

class HeaderNavRight extends Component {
    render() {
        return (
            <div>
                <NavRoomGroup />
                <NavLoginGroup />
            </div>
        );
    }
}

export default HeaderNavRight;