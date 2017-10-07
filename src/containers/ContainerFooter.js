import React, { Component } from 'react';
import FooterImg from '../components/footer/FooterImg';
import FooterUl1 from '../components/footer/FooterUl1';
import FooterUl2 from '../components/footer/FooterUl2';
import FooterUl3 from '../components/footer/FooterUl3';

class ContainerFooter extends Component {

    render(){
        return(
            <div className="FooterDiv">
                <div className="FooterUlGroupDiv">
                    <FooterImg />
                    <FooterUl1 />
                    <FooterUl2 />    
                    <FooterUl3 />
                </div>
            </div>
            )
        }
    }

export default ContainerFooter;