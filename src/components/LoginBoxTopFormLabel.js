import React from 'react';


const LoginBoxLabel = (props) => {

        return (      
            <label>{props.label}
                <input type={props.type} className={props.className} name={props.name} value={props.value} onChange={props.onChange}/>
            </label>
        )
    }


export default LoginBoxLabel;