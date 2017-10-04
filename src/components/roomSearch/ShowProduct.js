import React, { Component } from 'react';

class ShowProduct extends Component {
    render() {
        return (
            <div className="CommonShow ShowProduct">       
                <ul>
                    <li> <input type="checkbox" defaultChecked id="product1" /> <label htmlFor="product1"> 월세 + 전세 </label></li>
                    <li> <input type="checkbox" id="product2" /> <label htmlFor="product2" > 월세 </label></li>
                    <li> <input type="checkbox" id="product3"/> <label htmlFor="product3"> 전세 </label></li>
                </ul>
            </div>
        );
    }
}

export default ShowProduct;