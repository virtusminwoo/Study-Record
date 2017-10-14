import React from 'react';
import messages from './messages';
import './index.css';

const MainPhotoInput = () => {

    return (
        <div className="mainPhoto">
             <div className="mainPhotoInputGroup">   
                <input type={messages.inputText.type} className="mainPhotoInputText" placeholder={messages.inputText.placeholder} />
                <button type={messages.inputButton.type} className="mainPhotoInputButton">{messages.inputButton.buttonName}</button>
            </div>
        </div>
    )
}

export default MainPhotoInput;