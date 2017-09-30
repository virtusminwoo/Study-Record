import React, { Component } from 'react';
import ContainerHeader from './ContainerHeader';
import MainPhotoBottomDiv from '../components/MainPhotoBottomDiv';
import TemaSearchGroup from '../components/TemaSearchGroup';
import CareDiv from '../components/CareDiv';
import NavSiteGroup from '../components/NavSiteGroup';
import TableSiteDiv from '../components/TableSiteDiv';
import ContainerFooter from './ContainerFooter';

class ContainerApp extends Component {
    render() {
        return(
            <div className="ContainerApp">
                <ContainerHeader />
                <MainPhotoBottomDiv />
                <TemaSearchGroup />
                <CareDiv />
                <NavSiteGroup />
                <TableSiteDiv />
                <ContainerFooter />
            </div>
            );
        };
    }

export default ContainerApp;
