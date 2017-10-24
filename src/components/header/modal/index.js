import React from 'react';
import './index.css';
import LoginBox from '../loginBox'


const Modal = (props) => {
    return (
        <div className="modal">    
            <div className="allBorder">    
                <span className="close" onClick={props.onClick}>    
                    &times; 
                </span>
                <LoginBox />
            </div>
        </div>
        )
    }

export default Modal;