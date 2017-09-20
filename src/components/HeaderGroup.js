import React, { Component } from 'react';
import HeaderNavLeft from './HeaderNavLeft';
import HeaderNavRight from './HeaderNavRight';

class HeaderGroup extends Component {
    render() {
        return (
            <div>
                <HeaderNavLeft />
                <HeaderNavRight />
            </div>
        );
    }
}

export default HeaderGroup;