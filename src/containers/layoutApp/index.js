import React, { Component } from 'react';
import './index.css'

import LayoutHeader from '../layoutHeader'
import MainPhotoInput from '../../components/home/mainPhotoInput'
import Theme from '../../components/home/theme';
import CareBar from '../../components/home/careBar';
import NavSite from '../../components/home/navSite'
import TableSite from '../../components/home/tableSite';
import LayoutFooter from '../layoutFooter'


class LayoutApp extends Component {
    
    render() {
        return(
            <div className="layoutApp">
                <LayoutHeader />
                <MainPhotoInput />
                <Theme />
                <CareBar />
                <NavSite />
                <TableSite />
                <LayoutFooter />
            </div>
            );
        };
    }

export default LayoutApp;
