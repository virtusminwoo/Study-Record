import React from 'react';
import InputCheckBox from './InputCheckBox'

const ShowDeal = () => {

        return (
            <div className="CommonShow ShowDeal">         
                <h4> 거래종류 </h4>  
                <ul>
                    <InputCheckBox id={"deal1"} default={true} htmlFor={"deal1"} text={"전체"}/>
                    <InputCheckBox id={"deal2"} htmlFor={"deal2"} text={"중개"}/>
                    <InputCheckBox id={"deal3"} htmlFor={"deal3"} text={"직거래"}/>
                </ul>
            </div>
        )
    }


export default ShowDeal;