import React, { Component } from 'react';
import LoginBox from './LoginBox';
import FooterImg from './FooterImg';

class Modal extends Component {
    
    render() {
        
        return (
            <div className="Modal">    
                <div className="AllBorder">    
                    <span className="Close" onClick={this.onClick}>    
                        &times; 
                    </span>
                    <LoginBox />
                </div>
            </div>
        );
    }
}

export default Modal;