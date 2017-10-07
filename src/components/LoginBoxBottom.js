import React from 'react';

const LoginBoxBottom = () => {

        return (
            <div className="LoginBoxBottom">
                <ul className="LoginOption">
                    <li><a href = "#">비밀번호 찾기</a></li>
                    <li> | </li>
                    <li><a href = "#">일반 회원가입</a></li>
                </ul>

                <div className="OtherLoginButton">
                    <button className="KakaoLogin">카카오톡 로그인</button>
                    <button className="FacebookLogin">페이스북 로그인</button>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <a href = "#" className="ProRegister">공인중개사 회원가입</a>
                </div>
            </div>
        )
    }

export default LoginBoxBottom;