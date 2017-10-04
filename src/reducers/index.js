import { combineReducers } from 'redux'

import marker from './marker';
import modal from './modal';
import loginValidation from './loginValidation';
import showDown from './showDown'


const pushActions = combineReducers({
    modalData : modal,
    markerData : marker,
    loginValidationData : loginValidation,
    showDownData : showDown
})


export default pushActions;