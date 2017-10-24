import React from 'react';

const Li = (props) => {

    const content = props.items.map((item,i) => 
      <li key ={i}> {item} </li>
    );

  return (
      <ul className={props.className}>
        {content}
      </ul>
  );
}


export default Li;
