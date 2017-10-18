import { combineReducers } from 'redux'

import modal from './modal';
import navLeftDropDown from './navLeftDropDown'
import roomsInfo from './roomsInfo'
import sideBarPosition from './sideBarPosition'
import loginBox from './loginBox'

const pushActions = combineReducers({
    modalData : modal,
    navLeftDropDownData : navLeftDropDown,
    roomsInfoData : roomsInfo,
    sideBarPositionData : sideBarPosition,
    loginBoxData : loginBox
})


export default pushActions;