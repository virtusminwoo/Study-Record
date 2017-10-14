import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import messages from './messages';

import NavLogin from '../../components/header/navLogin'


class LayoutHeader extends Component {
    
    render() {
        return (
            <div className="layoutHeader">
                <div>
                    <Link to="/">
                        <img className="iconCommon iconMain" src ={messages.iconMain.src} alt={messages.iconMain.alt} />
                    </Link>
                        <img className="iconCommon iconMainPro" src ={messages.iconMainPro.src} alt={messages.iconMainPro.alt} />
                        <img className="iconCommon iconMainBar" src ={messages.iconMainBar.src} alt={messages.iconMainBar.alt} />
                        <img className="iconCommon iconMainPay" src ={messages.iconMainPay.src} alt={messages.iconMainPay.alt} />
                </div>
                <div className="navRoom">
                    <ul>
                        <li><NavLink to='/roomsearch' className="navLink" activeClassName="active">방 검색</NavLink></li>
                        <li><NavLink to='#' className="navLink" activeClassName="active">관심목록</NavLink></li>
                        <li><NavLink to='#' className="navLink" activeClassName="active">방 등록</NavLink></li>
                    </ul>
                </div>
                <NavLogin />
            </div>
            )
        }
    }

export default LayoutHeader;