//Redux사용으로 Container사용

import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginBoxTop extends Component {
    render() {
        return (
            <div className="LoginBoxTop">   
                <LoginForm />
            </div>
        );
    }
}

export default LoginBoxTop;