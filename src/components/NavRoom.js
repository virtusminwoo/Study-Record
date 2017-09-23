// 라우트 때문에 쓸지 말지 고민

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


        class NavRoom extends Component {
            render() {
                return(
                    <ul>
                        <li><Link to="/roomsearch">방검색</Link></li>
                    </ul>
                );
            }
        }
        
        export default NavRoom;