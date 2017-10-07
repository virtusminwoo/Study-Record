import React from 'react';
import LoginBox from './LoginBox';
import NavLoginLi from './NavLoginLi';


 const NavLogin = ({showModal,OpenModal, CloseModal}) => {

    let loginModal;
    if(showModal===true){
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
    } else if (showModal === false){
        loginModal = null
    }

    return (
            <div className="NavLoginDiv">
                <ul>
                    <NavLoginLi liText={"공인중개사 회원가입"} />
                    <NavLoginLi liText={"회원가입 및 로그인"} onClick={OpenModal}/>
                    {loginModal}
                </ul>
            </div>
        )
    }

export default NavLogin;