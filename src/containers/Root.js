import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContainerAppIndex from './ContainerAppIndex';

class Root extends Component{
    render(){
        return(
            <BrowserRouter>
                <ContainerAppIndex />
            </BrowserRouter>
                )
            }
        }

export default Root;