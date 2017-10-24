import React from 'react';
import InputCheckBox from '../../../../common/InputCheckBox'
import messages from './messages';
import './index.css';

const DropDownOption = () => {

        return (
            <div className="commonDropDown dropDownOption">         
                <h4> {messages.optionH4.text} </h4>  
                <ul>
                    <InputCheckBox id={messages.option1.id} htmlFor={messages.option1.htmlFor} text={messages.option1.text}/>
                    <InputCheckBox id={messages.option2.id} htmlFor={messages.option2.htmlFor} text={messages.option2.text}/>
                    <InputCheckBox id={messages.option3.id} htmlFor={messages.option3.htmlFor} text={messages.option3.text}/>
                    <InputCheckBox id={messages.option4.id} htmlFor={messages.option4.htmlFor} text={messages.option4.text}/>
                    <hr />
                    <InputCheckBox id={messages.option5.id} htmlFor={messages.option5.htmlFor} text={messages.option5.text}/>
                    <InputCheckBox id={messages.option6.id} htmlFor={messages.option6.htmlFor} text={messages.option6.text}/>
                    <InputCheckBox id={messages.option7.id} htmlFor={messages.option7.htmlFor} text={messages.option7.text}/>
                    <hr />
                    <InputCheckBox id={messages.option8.id} htmlFor={messages.option8.htmlFor} text={messages.option8.text}/>
                    <InputCheckBox id={messages.option9.id} htmlFor={messages.option9.htmlFor} text={messages.option9.text}/>
                    <InputCheckBox id={messages.option10.id} htmlFor={messages.option10.htmlFor} text={messages.option10.text}/>
                    <InputCheckBox id={messages.option11.id} htmlFor={messages.option11.htmlFor} text={messages.option11.text}/>
                    <InputCheckBox id={messages.option12.id} htmlFor={messages.option12.htmlFor} text={messages.option12.text}/>
                </ul>
            </div>
        )
    }

export default DropDownOption;