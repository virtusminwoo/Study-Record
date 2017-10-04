import React from 'react';
import FooterImg from './FooterImg';
import FooterUl1 from './FooterUl1';
import FooterUl2 from './FooterUl2';
import FooterUl3 from './FooterUl3';



const FooterGroup = () => {
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
    

export default FooterGroup;