import React, { Component } from 'react';

class LoginOption extends Component {
    render() {
        return (
            <ul className="LoginOption">
                    <li><a href = "#">비밀번호 찾기</a></li>
                    <li> | </li>
                    <li><a href = "#">일반 회원가입</a></li>
                </ul>
        );
    }
}

export default LoginOption;