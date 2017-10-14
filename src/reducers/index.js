import { combineReducers } from 'redux'

import modal from './modal';
import dropDown from './dropDown'
import roomsInfo from './roomsInfo'

const pushActions = combineReducers({
    modalData : modal,
    dropDownData : dropDown,
    roomsInfoData : roomsInfo
})


export default pushActions;