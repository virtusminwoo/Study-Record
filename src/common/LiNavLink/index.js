import React from 'react';
import { NavLink } from 'react-router-dom';

const LiNavLink = (props) => {

    const content = props.items.map((item) => 
      <li><NavLink className={props.NavLinkClassName} activeClassName={props.activeClassName} to={props.item.to}> {item} </NavLink></li>
    );

  return (
      <ul className={props.ulClassName}>
        {content}
      </ul>
  );
}


export default LiNavLink;
