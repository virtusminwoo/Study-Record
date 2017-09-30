import React, { Component } from 'react';
import FooterImg from '../components/FooterImg';
import FooterUl1 from '../components/FooterUl1';
import FooterUl2 from '../components/FooterUl2';
import FooterUl3 from '../components/FooterUl3';

class ContainerFooter extends Component {
    render(){
            return(
            <div className="FooterDiv">
                <div className="FooterUlGroupDiv">
                    <FooterImg img={require("../images/footerStation3.png")}/>
                    <FooterUl1 />
                    <FooterUl2 />    
                    <FooterUl3 img1={require("../images/footerFacebook.png")} img2={require("../images/footerBlog.png")} />
                </div>
            </div>
            )
        }
    }

export default ContainerFooter;