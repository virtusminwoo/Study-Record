import React, { Component } from 'react';
import HeaderNavLeft from '../components/header/HeaderNavLeft';
import HeaderNavRight from '../components/header/HeaderNavRight';


class ContainerHeader extends Component {
    
    render() {
        return (
            <div className="ContainerHeader">
                <HeaderNavLeft />
                <HeaderNavRight />
            </div>
            )
        }
    }

export default ContainerHeader;