import React, { Component } from 'react';
import LoginBoxTop from './LoginBoxTop';
import LoginBoxBottom from './LoginBoxBottom';

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