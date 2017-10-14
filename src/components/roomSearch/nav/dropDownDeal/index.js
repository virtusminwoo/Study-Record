import React from 'react';
import InputCheckBox from '../../../../common/InputCheckBox'
import messages from './messages';
import './index.css';

const DropDownDeal = () => {

        return (
            <div className="commonDropDown dropDownDeal">         
                <h4> {messages.dealH4.text} </h4>  
                <ul>
                    <InputCheckBox id={messages.deal1.id} default={messages.deal1.default} htmlFor={messages.deal1.htmlFor} text={messages.deal1.text}/>
                    <InputCheckBox id={messages.deal2.id} default={messages.deal2.default} htmlFor={messages.deal2.htmlFor} text={messages.deal2.text}/>
                    <InputCheckBox id={messages.deal3.id} default={messages.deal3.default} htmlFor={messages.deal3.htmlFor} text={messages.deal3.text}/>
                </ul>
            </div>
        )
    }


export default DropDownDeal;