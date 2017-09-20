import React, { Component } from 'react';

class OtherLoginButton extends Component {
    render() {
        return (
            <div className="OtherLoginButton">
                    <button className="KakaoLogin">카카오톡 로그인</button>
                    <button className="FacebookLogin">페이스북 로그인</button>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <a href = "#" className="ProRegister">공인중개사 회원가입</a>
            </div>
        );
    }
}

export default OtherLoginButton;