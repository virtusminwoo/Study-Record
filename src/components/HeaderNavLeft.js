import React, { Component } from 'react';
import MainIcon from './MainIcon';
import MainDabangPro from './MainDabangPro';
import MainBar from './MainBar';
import MainDabangPay from './MainDabangPay';


class HeaderNavLeft extends Component {
    render() {
        return (
            <div>
                <MainIcon img={require("../images/mainIcon.png")} />
                <MainDabangPro img={require("../images/mainDabangPro.png")} />
                <MainBar img={require("../images/mainBar.png")} />
                <MainDabangPay img={require("../images/mainDabangPay.png")} />
            </div>
        );
    }
}

export default HeaderNavLeft;