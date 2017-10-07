import React from 'react';
import { Link } from 'react-router-dom';


 const NavLoginLi = (props) => {

        return (
            <li onClick={props.onClick}>
                <Link to='#' className="NavLink" >
                    {props.liText}
                </Link>
            </li>
        )
    }

export default NavLoginLi;