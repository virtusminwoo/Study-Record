//쓰는 것을 고려해보는 중

import React, { Component } from 'react';

class LoginBoxLogin extends Component {
    render() {
        return (
            <div className="LoginBoxLogin">   
                <label>이메일</label>
                <input type="text" className="EmailId" />
                <br />
                <label>비밀번호</label>
                <input type="password" className="Password" />
                <br />
                <button className="LoginButton" type="submit">로그인</button>
            </div>
        );
    }
}

export default LoginBoxLogin;