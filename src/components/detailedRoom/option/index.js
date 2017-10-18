import React from 'react';
import messages from './messages'
import './index.css';

const Option = () => {

        return (
            <div className="option">
                <h3>{messages.option.text}</h3>
                <br />
                <img src={messages.option.src} alt={messages.option.alt} />
            </div>
        )
    }

export default Option;