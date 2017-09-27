import React, { Component } from 'react';
import NavLogin from './NavLogin';
import NavLoginContainer from '../containers/ContainerNavLogin'

        class NavLoginGroup extends Component{
        

        render(){
            return(
                
                    <div className="NavLoginDiv">
                        <NavLoginContainer />
                    </div>
                
            )
        }
    }
    
export default NavLoginGroup;