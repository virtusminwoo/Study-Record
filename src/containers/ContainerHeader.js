import React, { Component } from 'react';
import HeaderNavLeft from '../components/HeaderNavLeft';
import HeaderNavRight from '../components/HeaderNavRight';


class ContainerHeader extends Component {
    render() {
        return (
            <div className="ContainerHeader">
                <HeaderNavLeft />
                <HeaderNavRight />
            </div>
            );
        };
    };

export default ContainerHeader;