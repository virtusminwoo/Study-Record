import React from 'react';
import { NavLink } from 'react-router-dom';
import ReduxNavLogin from '../../containers/ReduxNavLogin'

const HeaderNavRight = () => {
        return (
            <div className="HeaderNavRight">
                <div className="NavRoomDiv">
                    <ul>
                        <li><NavLink to='/roomsearch' className="NavLink" activeClassName="active">방 검색</NavLink></li>
                        <li><NavLink to='#' className="NavLink" activeClassName="active">관심목록</NavLink></li>
                        <li><NavLink to='#' className="NavLink" activeClassName="active">방 등록</NavLink></li>
                    </ul>
                </div>
                    <ReduxNavLogin />
                </div>
        );
    }


export default HeaderNavRight;