import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppIndex from './appIndex';

class Root extends Component{
    render(){
        return(
            <BrowserRouter>
                <AppIndex />
            </BrowserRouter>
                )
            }
        }

export default Root;