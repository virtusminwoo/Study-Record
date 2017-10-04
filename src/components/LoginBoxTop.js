//Redux사용으로 Container사용

import React from 'react';
import LoginForm from './LoginForm';
import ReduxLoginForm from '../containers/ReduxLoginForm'

const LoginBoxTop = () => {
        return (
            <div className="LoginBoxTop">   
                <ReduxLoginForm />
            </div>
        );
    }

export default LoginBoxTop;