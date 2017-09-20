import React, { Component } from 'react';


        class NavRoom extends Component {
            render() {
                return(
                    <ul>
                        <li><a href = {this.props.NavRoomData.link}>{this.props.NavRoomData.title}</a></li>
                    </ul>
                );
            }
        }
        
        export default NavRoom;