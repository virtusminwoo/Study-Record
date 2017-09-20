import React, { Component } from 'react';
import NavLogin from './NavLogin';

        class NavLoginGroup extends Component{
        constructor(){
            super();
            
            this.state={
                NavLoginData:
                [
                    {
                        "id":1,
                        "title":"공인중개사 회원가입",
                        "link":"https://pro.dabangapp.com/#/"
                    },
                    
                    {
                        "id":2,
                        "title":"회원가입 및 로그인",
                        "link":"https://www.dabangapp.com/#/"
                    }
                ]
            }
        }

        render(){
            return(
                
                    <div className="NavLoginDiv">
                        {this.state.NavLoginData.map((navData, i) => <NavLogin key = {i} NavLoginData = {navData} />)} 
                    </div>
                
            )
        }
    }
    
export default NavLoginGroup;