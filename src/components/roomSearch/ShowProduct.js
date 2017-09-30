import React, { Component } from 'react';

class ShowProduct extends Component {
    render() {
        return (
            <div className="CommonShow ShowProduct">       
                <h4> 매물종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked /> <label > 월세 + 전세 </label></li>
                    <li> <input type="checkbox" /> <label > 월세 </label></li>
                    <li> <input type="checkbox" /> <label> 전세 </label></li>
                </ul>
            </div>
        );
    }
}

export default ShowProduct;