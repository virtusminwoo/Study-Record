import React from 'react';

const HeaderNavLeft = () => {
    return (
             <div className="HeaderNavLeft">
                <div className="MainIconDiv">
                    <img src = {require("../images/mainIcon.png")} alt="" />
                </div>
                <div className="MainDabangProDiv">
                    <img src = {require("../images/mainDabangPro.png")} alt="" />
                </div>
                <div className="MainBarDiv">
                    <img src =  {require("../images/mainBar.png")} alt="" />
                </div>
                <div className="MainDabangPayDiv">
                    <img src = {require("../images/mainDabangPay.png")} alt="" />
                </div> 
            </div>
    );
};




HeaderNavLeft.defaultProps = {
};



export default HeaderNavLeft;