import React from 'react';
import { Link } from 'react-router-dom';


const NavRoomGroup = () => {
        return(
            <div className="NavRoomDiv">
                <ul>
                    <li><Link to='/roomsearch' activeClassName="active">방 검색</Link></li>
                    <li><Link to='#'>관심목록</Link></li>
                    <li><Link to='#'>방 등록</Link></li>
                </ul>
            </div>
        )
    }
    
export default NavRoomGroup;