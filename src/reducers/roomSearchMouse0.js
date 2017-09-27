import * as types from '../actions/ActionTypes';


const initialState = {
    stateMarkerLat : '',
    stateMarkerLng : ''
};

function roomSearchMouse0(state = initialState, action) {
    switch (action.type) {
        case types.MOUSE_OVER0: 
            return {
                ...state,
                stateMarkerLat : 37.501947,
                stateMarkerLng : 127.034821
            };
        case types.MOUSE_OUT0:
            return {
                ...state,
                stateMarkerLat : '',
                stateMarkerLng : ''
            };
        default:
            return state;
    }
};

export default roomSearchMouse0;