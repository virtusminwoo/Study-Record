import { combineReducers } from 'redux'

import modal from './modal';
import dropDown from './dropDown'

const pushActions = combineReducers({
    modalData : modal,
    dropDownData : dropDown
})


export default pushActions;