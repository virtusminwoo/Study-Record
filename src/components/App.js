import React, { Component } from 'react';

import HeaderGroup from './HeaderGroup';
import MainPhotoBottomDiv from './MainPhotoBottomDiv';
import TemaSearchGroup from './TemaSearchGroup';
import CareGroup from './CareGroup';
import NavSiteGroup from './NavSiteGroup';
import TableSiteDiv from './TableSiteDiv';
import FooterGroup from './FooterGroup';
import RoomSearchWrapper from './RoomSearchWrapper'



class App extends Component {
    render() {
        return (
            <div>
                <HeaderGroup />
                <MainPhotoBottomDiv />
                <TemaSearchGroup />
                <CareGroup />
                <NavSiteGroup />
                <TableSiteDiv />
                <FooterGroup />
                <RoomSearchWrapper />
            </div>
        );
    }
}

export default App;