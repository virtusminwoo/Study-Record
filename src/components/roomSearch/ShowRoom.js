import React, { Component } from 'react';

class ShowRoom extends Component {
    render() {
        return (
            <div className="CommonShow ShowRoom">         
                <h4> 방 종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked id="deal1"/><label htmlFor="deal1"> 전체</label></li>
                    <li> <input type="checkbox"  id="deal2"/><label htmlFor="deal2"> 원룸</label></li>
                    <li> <input type="checkbox"  id="deal3"/><label htmlFor="deal3"> 1.5룸</label></li>
                    <li> <input type="checkbox"  id="deal4"/><label htmlFor="deal4"> 투룸</label></li>
                    <li> <input type="checkbox"  id="deal5"/><label htmlFor="deal5"> 쓰리룸</label></li>
                    <li> <input type="checkbox"  id="deal6"/><label htmlFor="deal6"> 오피스텔</label></li>
                    <li> <input type="checkbox"  id="deal7"/><label htmlFor="deal7"> 아파트</label></li>
                </ul>
            </div>
        );
    }
}

export default ShowRoom;