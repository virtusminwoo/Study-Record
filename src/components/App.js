import React, { Component } from 'react';

import HeaderGroup from './HeaderGroup';
import MainPhotoBottomDiv from './MainPhotoBottomDiv';
import TemaSearchGroup from './TemaSearchGroup';
import CareGroup from './CareGroup';
import NavSiteGroup from './NavSiteGroup';
import TableSiteDiv from './TableSiteDiv';
import FooterGroup from './FooterGroup';
import { Route } from 'react-router-dom';
import RoomSearchWrapper from './roomSearch/RoomSearchWrapper';




class App extends Component {
    render() {
        return (
            <div className="AppWrapper">
                <HeaderGroup />
                <MainPhotoBottomDiv />
                <TemaSearchGroup />
                <CareGroup />
                <NavSiteGroup />
                <TableSiteDiv />
                <FooterGroup />
                <Route path="/roomSearch1" component={RoomSearchWrapper}/>
            </div>
        );
    }
}

export default App;