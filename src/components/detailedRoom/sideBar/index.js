import React from 'react';
import './index.css';
import SideBarTop from '../sideBarTop'
import SideBarBottom from '../sideBarBottom'

const SideBar = (props) => {
    const topLength = parseInt(document.body.scrollHeight - 1950,10)

    const styleTop = {
        top : topLength
    }
    const styleNone = {
    }

        return (
            <div className ="sideBar">
            <div className={props.isabsoluteDiv? "sideBarAbsolute" : "sideBarBasic"} style = {props.isabsoluteDiv? styleTop : styleNone}>
                    <SideBarTop room={props.room}/>
                    <SideBarBottom room={props.room}/>
            </div>
            </div>
        )
    }



export default SideBar;