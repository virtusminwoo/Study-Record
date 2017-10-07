import React from 'react';
import InputCheckBox from './InputCheckBox'

const ShowDeal = () => {

        return (
            <div className="CommonShow ShowDeal">         
                <h4> 거래종류 </h4>  
                <ul>
                    <li> <input type="checkbox" defaultChecked id="deal1"/><label htmlFor="deal1"> 전체</label></li>
                    <InputCheckBox id={"deal2"} htmlFor={"deal2"} text={"중개"}/>
                    <InputCheckBox id={"deal3"} htmlFor={"deal3"} text={"직거래"}/>
                </ul>
            </div>
        )
    }


export default ShowDeal;