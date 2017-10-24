import React from 'react';
import './index.css'

const InputNumber = (props) => {



    return (
        <div className="commonInputNumberDiv" >
            <input type="number" min={props.min} max={props.max} value={props.value} step={props.step} />
        </div>
        )
    }

export default InputNumber;