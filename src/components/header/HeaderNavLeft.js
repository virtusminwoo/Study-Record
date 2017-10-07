import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavLeft = () => {
    return (
             <div className="HeaderNavLeft">
                <Link to="/">
                <div className="MainIconDiv">
                    <img src = {require("../../images/Header/mainIcon.png")} alt="" />
                </div>
                </Link>
                <div className="MainDabangProDiv">
                    <img src = {require("../../images/Header/mainDabangPro.png")} alt="" />
                </div>
                <div className="MainBarDiv">
                    <img src =  {require("../../images/Header/mainBar.png")} alt="" />
                </div>
                <div className="MainDabangPayDiv">
                    <img src = {require("../../images/Header/mainDabangPay.png")} alt="" />
                </div> 
            </div>
        )
    }

export default HeaderNavLeft;