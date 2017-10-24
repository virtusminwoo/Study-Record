import React, { Component } from 'react';
import './index.css';
import Li from '../../common/Li'
import messages from './messages';

class LayoutFooter extends Component {

    render(){
        return(
            <div className="layoutFooter">
                <div className="footerUlGroup">
                    <img className="footerImgStation3" src={messages.FooterImg.src} alt={messages.FooterImg.alt} />
                    <Li className="footerUl1" items={messages.FooterUl1.items} />
                    <Li className="footerUl2" items={messages.FooterUl2.items} />
                    <Li className="footerUl3" items={messages.FooterUl3.items} />
                    <img className="footerImgFacebook" src={messages.FooterImgFacebook.src} alt={messages.FooterImgFacebook.alt} />
                    <img className="footerImgBlog" src={messages.FooterImgBlog.src} alt={messages.FooterImgBlog.alt} />
                </div>
            </div>
            )
        }
    }

export default LayoutFooter;