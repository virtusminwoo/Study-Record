import React, { Component } from 'react';
import LoginBoxBottom from './LoginBoxBottom';
import LoginBoxTop from './LoginBoxTop';

class LoginBox extends Component {
    
    render() {
        return (
            <div className="LoginBox">         
                <LoginBoxTop />
                <LoginBoxBottom />
            </div>
        );
    }
}

export default LoginBox;