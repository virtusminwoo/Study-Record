import React from 'react';
import messages from './messages';
import InputNumber from '../../../../common/InputNumber'
import Li from '../../../../common/Li'
import './index.css';

const DropDownDeposit = () => {
        return (
            <div className="commonDropDown dropDownDeposit">      
                <div className="commonDropDownTop">   
                    <h4>{messages.depositH4.text}</h4>  
                    <p>{messages.depositP.text}</p>
                    <InputNumber min={messages.inputValue0.min} max={messages.inputValue0.max} value={messages.inputValue0.value} step={messages.inputValue0.step} />~
                    <InputNumber min={messages.inputValue999999.min} max={messages.inputValue999999.max} value={messages.inputValue999999.value} step={messages.inputValue999999.step} />
                    <hr />
                </div>
                <div className="dropDownDepositDivLeft">
                    <Li className="dropDownDepositUlLeft" items={messages.depositUlLeft.items} />
                </div>
                <div className="dropDownDepositDivRight">
                    <Li className="dropDownDepositUlRight" items={messages.depositUlRight.items} />
                </div>
            </div>
        )
    }


export default DropDownDeposit;