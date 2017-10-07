import React from 'react';

const NavSiteGroupUl = (props) => {
    
    const liDatas= props.liData.map((liData,i) =>
        <li>{liData}</li>
    )

        return (      
            <div className={props.className}>
                <h4>{props.title}</h4>
                <ul>
                    {liDatas}
                </ul>
            </div>
        )
    }

export default NavSiteGroupUl;