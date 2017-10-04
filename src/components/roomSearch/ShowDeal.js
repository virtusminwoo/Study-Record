import React, { Component } from 'react';

class ShowDeal extends Component {
    render() {
        return (
            <div className="CommonShow ShowDeal">         
                <h4> 거래종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked id="deal1"/><label htmlFor="deal1"> 전체</label></li>
                    <li> <input type="checkbox" id="deal2"/><label htmlFor="deal2"> 중개</label></li>
                    <li> <input type="checkbox" id="deal3"/><label htmlFor="deal3"> 직거래</label></li>
                </ul>
            </div>
        );
    }
}

export default ShowDeal;