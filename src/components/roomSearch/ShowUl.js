import React from 'react';

const ShowUl = (props) => {

    const liDatas= props.liData.map((liData,i) =>
        <li key={i}>{liData}</li>
    )

        return (
            <div className={props.divClassName}>
                <ul className={props.ulClassName}>
                    {liDatas}
                </ul>
            </div>
        )
    }


export default ShowUl;