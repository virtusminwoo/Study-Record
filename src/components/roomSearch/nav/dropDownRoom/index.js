import React from 'react';
import InputCheckBox from '../../../../common/InputCheckBox'
import messages from './messages';
import './index.css';

const DropDownRoom = () => {

        return (
            <div className="commonDropDown dropDownRoom">         
                <h4> {messages.roomH4.text} </h4>  
                <ul>
                    <InputCheckBox id={messages.room1.id} default={messages.room1.default} htmlFor={messages.room1.htmlFor} text={messages.room1.text}/>
                    <InputCheckBox id={messages.room2.id} default={messages.room2.default} htmlFor={messages.room2.htmlFor} text={messages.room2.text}/>
                    <InputCheckBox id={messages.room3.id} default={messages.room3.default} htmlFor={messages.room3.htmlFor} text={messages.room3.text}/>
                    <InputCheckBox id={messages.room4.id} default={messages.room4.default} htmlFor={messages.room4.htmlFor} text={messages.room4.text}/>
                    <InputCheckBox id={messages.room5.id} default={messages.room5.default} htmlFor={messages.room5.htmlFor} text={messages.room5.text}/>
                    <InputCheckBox id={messages.room6.id} default={messages.room6.default} htmlFor={messages.room6.htmlFor} text={messages.room6.text}/>
                    <InputCheckBox id={messages.room7.id} default={messages.room7.default} htmlFor={messages.room7.htmlFor} text={messages.room7.text}/>
                </ul>
            </div>
        )
    }

export default DropDownRoom;