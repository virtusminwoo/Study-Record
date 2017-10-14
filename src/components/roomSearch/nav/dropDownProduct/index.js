import React from 'react';
import InputCheckBox from '../../../../common/InputCheckBox'
import messages from './messages';
import './index.css';

const DropDownProduct = () => {

        return (
            <div className="commonDropDown dropDownProduct">    
                <h4> {messages.articleH4.text} </h4>     
                <ul>
                    <InputCheckBox id={messages.article1.id} default={messages.article1.default} htmlFor={messages.article1.htmlFor} text={messages.article1.text}/>
                    <InputCheckBox id={messages.article2.id} default={messages.article2.default} htmlFor={messages.article2.htmlFor} text={messages.article2.text}/>
                    <InputCheckBox id={messages.article3.id} default={messages.article3.default} htmlFor={messages.article3.htmlFor} text={messages.article3.text}/>
                </ul>
            </div>
        )
    }

export default DropDownProduct;