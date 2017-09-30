import React from 'react';
import { Link } from 'react-router-dom';
import ReduxNavLogin from '../containers/ReduxNavLogin'

const HeaderNavRight = () => {
        return (
            <div className="HeaderNavRight">
                <div className="NavRoomDiv">
                    <ul>
                        <li><Link to='/roomsearch' className="NavLink" >방 검색</Link></li>
                        <li><Link to='#' className="NavLink">관심목록</Link></li>
                        <li><Link to='#' className="NavLink">방 등록</Link></li>
                    </ul>
                </div>
                    <ReduxNavLogin />
                </div>
        );
    }


export default HeaderNavRight;