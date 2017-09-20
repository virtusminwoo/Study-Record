import React, { Component } from 'react';
import LoginOption from './LoginOption';
import OtherLoginButton from './OtherLoginButton';

class LoginBoxBottom extends Component {
    render() {
        return (
            <div className="LoginBoxBottom">
                <LoginOption />
                <OtherLoginButton />
            </div>
        );
    }
}

export default LoginBoxBottom;