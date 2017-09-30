import React, { Component } from 'react';

class ShowRoom extends Component {
    render() {
        return (
            <div className="CommonShow ShowRoom">         
                <h4> 방 종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked/> 전체</li>
                    <li> <input type="checkbox" /> 원룸</li>
                    <li> <input type="checkbox" /> 1.5룸</li>
                    <li> <input type="checkbox" /> 투룸</li>
                    <li> <input type="checkbox" /> 쓰리룸</li>
                    <li> <input type="checkbox" /> 오피스텔</li>
                    <li> <input type="checkbox" /> 아파트</li>
                </ul>
            </div>
        );
    }
}

export default ShowRoom;