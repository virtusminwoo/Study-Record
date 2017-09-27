import React, { Component } from 'react';
import Modal from './Modal';
import LoginBox from './LoginBox';






 const NavLogin = ({showModal,OpenModal, CloseModal}) => {
     let loginModal;
        if(showModal==true){
            loginModal = (
                <div className="Modal">    
                    <div className="AllBorder">    
                        <span className="Close" onClick={CloseModal}>    
                            &times; 
                        </span>
                        <LoginBox />
                    </div>
                </div>
            )
        } else if (showModal == false){
            loginModal = null
        }
    return (
            <ul>
                <li>공인중개사 회원가입</li>
                <li onClick={OpenModal}>
                    <a href = "#">
                        회원가입 및 로그인
                    </a>
                </li>
                {loginModal}
            </ul>

    );
};


NavLogin.defaultProps = {
    showModal: false
};






        export default NavLogin;