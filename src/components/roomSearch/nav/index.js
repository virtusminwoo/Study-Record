import React from 'react';
import NavLeft from '../navLeft'

import Li from '../../../common/Li'
import messages from './messages';
import './index.css';

const Nav = () => {

        return (
            <div className="roomSearchNav">
                <NavLeft />
                <div className="roomSearchNavRight">
                    <Li items={messages.navRightUl.items} />
                </div>
            </div>
        )
    }


export default Nav;