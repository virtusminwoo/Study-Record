import React from 'react';
import messages from './messages';
import './index.css';

const CareBar= () => {

        return (
            <div className="careBar">
                <img src={messages.careBarImg.src} alt={messages.careBarImg.alt} />
                <div className="careDot"></div>
            </div>
        )
    }


export default CareBar;