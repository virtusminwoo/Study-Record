import React, { Component } from 'react';
import FooterImg from './FooterImg';
import FooterUl1 from './FooterUl1';
import FooterUl2 from './FooterUl2';
import FooterUl3 from './FooterUl3';

class FooterUl extends Component {
    render(){
            return(
                <div className="FooterUlGroupDiv">
                    <FooterImg img={require("../images/footerStation3.png")}/>
                    <FooterUl1 />
                    <FooterUl2 />    
                    <FooterUl3 img1={require("../images/footerFacebook.png")} img2={require("../images/footerBlog.png")} />
                </div>
                    
            )
        }
    }

export default FooterUl;