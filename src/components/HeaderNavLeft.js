import React from 'react';

const HeaderNavLeft = () => {
    return (
             <div className="HeaderNavLeft">
                <div className="MainIconDiv">
                    <img src = {require("../images/Header/mainIcon.png")} alt="" />
                </div>
                <div className="MainDabangProDiv">
                    <img src = {require("../images/Header/mainDabangPro.png")} alt="" />
                </div>
                <div className="MainBarDiv">
                    <img src =  {require("../images/Header/mainBar.png")} alt="" />
                </div>
                <div className="MainDabangPayDiv">
                    <img src = {require("../images/Header/mainDabangPay.png")} alt="" />
                </div> 
            </div>
    );
};




HeaderNavLeft.defaultProps = {
};



export default HeaderNavLeft;