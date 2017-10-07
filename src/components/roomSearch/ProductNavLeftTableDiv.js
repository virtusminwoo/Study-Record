import React from 'react';

const ProductNavDiv = (props) => {

        return (
            <div className="RoomSearchNavLeftDiv">
                <div className={props.className} onClick={props.onClick}>
                    {props.text}
                </div>
            </div>
        )
    }


export default ProductNavDiv;