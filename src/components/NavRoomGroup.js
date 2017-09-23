import React, { Component } from 'react';
import { Link } from 'react-router-dom';




        class NavRoomGroup extends Component{
        
    render(){
            return(
                
                    <div className="NavRoomDiv">
                        <ul>
                            <li><Link to='/roomsearch'>방 검색</Link></li>
                            <li>관심목록</li>
                            <li>방 등록</li>
                        </ul>
                    </div>
                
            )
        }
    }
    
export default NavRoomGroup;