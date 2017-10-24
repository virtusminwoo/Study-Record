import React from 'react';

const InputCheckBox = (props) => {



    return (
        <li> 
            <input type="checkbox" id={props.id} defaultChecked={props.default}/>
            <label  htmlFor={props.htmlFor}>{props.text}</label>
        </li>
        )
    }

export default InputCheckBox;