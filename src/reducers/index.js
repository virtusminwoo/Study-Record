import { combineReducers } from 'redux'

import marker from './marker';
import modal from './modal';


const pushActions = combineReducers({
    modalData:modal,
    markerData:marker
})


export default pushActions;