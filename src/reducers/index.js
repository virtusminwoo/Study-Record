import { combineReducers } from 'redux'

import modal from './modal';
import dropDown from './dropDown'
import photoLine from './photoLine'
import navSiteGroup from './navSiteGroup'

const pushActions = combineReducers({
    modalData : modal,
    dropDownData : dropDown,
    photoLineData : photoLine,
    navSiteGroupData: navSiteGroup
})


export default pushActions;