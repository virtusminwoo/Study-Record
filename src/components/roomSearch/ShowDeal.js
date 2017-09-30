import React, { Component } from 'react';

class ShowDeal extends Component {
    render() {
        return (
            <div className="CommonShow ShowDeal">         
                <h4> 거래종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked/> 전체</li>
                    <li> <input type="checkbox" /> 중개</li>
                    <li> <input type="checkbox" /> 직거래</li>
                </ul>
            </div>
        );
    }
}

export default ShowDeal;