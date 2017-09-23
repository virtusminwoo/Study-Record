import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppIndex from '../components/AppIndex';

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