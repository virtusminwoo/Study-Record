import React from 'react';
import navSiteUiGroupApi from '../data/navSiteUiGroupApi';
import NavSiteGroupUl from '../components/NavSiteGroupUl';


const initialState = {
    navSiteGroupDatas : navSiteUiGroupApi.navData.map((data, id) => 
            <NavSiteGroupUl key ={id} className={data.className} title={data.title} liData={data.liData}/>
        )
};

function navSiteGroup(state = initialState) {
            return state;
    }

export default navSiteGroup;