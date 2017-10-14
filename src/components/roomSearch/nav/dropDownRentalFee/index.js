import React from 'react';
import messages from './messages';
import InputNumber from '../../../../common/InputNumber'
import Li from '../../../../common/Li'
import './index.css';

const dropDownRentalFee = () => {
        return (
            <div className="commonDropDown dropDownRentalFee">      
                <div className="commonDropDownTop">    
                    <h4> {messages.rentalFeeH4.text} </h4>  
                    <InputNumber min={messages.inputValue0.min} max={messages.inputValue0.max} value={messages.inputValue0.value} step={messages.inputValue0.step} />~
                    <InputNumber min={messages.inputValue999999.min} max={messages.inputValue999999.max} value={messages.inputValue999999.value} step={messages.inputValue999999.step} />
                    <hr />
                </div>
                <div className="dropDownRentalFeeDivLeft">
                    <Li className="dropDownRentalFeeUlLeft" items={messages.rentalFeeUlLeft.items} />
                </div>
                <div className="dropDownRentalFeeDivRight">
                    <Li className="dropDownRentalFeeUlRight" items={messages.rentalFeeUlRight.items} />
                </div>
            </div>
        )
    }


export default dropDownRentalFee;