import React from 'react';
import InputCheckBox from './InputCheckBox'

const ShowProduct = () => {

        return (
            <div className="CommonShow ShowProduct">       
                <ul>
                    <li> <input type="checkbox" defaultChecked id="product1" /> <label htmlFor="product1"> 월세 + 전세 </label></li>
                    <InputCheckBox id={"product2"} htmlFor={"product2"} text={"월세"}/>
                    <InputCheckBox id={"product3"} htmlFor={"product3"} text={"전세"}/>
                </ul>
            </div>
        )
    }

export default ShowProduct;