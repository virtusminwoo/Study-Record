import React from 'react';
import { Link } from 'react-router-dom';
import LoginBox from './LoginBox';


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
                    <li>
                        <Link to='#' className="NavLink" >
                            공인중개사 회원가입
                        </Link>
                    </li>
                    <li onClick={OpenModal}>
                        <Link to='#' className="NavLink" >
                            회원가입 및 로그인
                        </Link>
                    </li>
                    {loginModal}
                </ul>
            </div>

    );
};


NavLogin.defaultProps = {
    showModal: false
};




export default NavLogin;