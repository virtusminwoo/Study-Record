import * as types from '../actions/ActionTypes';

const initialState = {
    stateMarkerLat : '',
    stateMarkerLng : ''
};

function marker(state = initialState, action) {
    switch (action.type) {
        case types.MOUSE_OVER0: 
            return {
                ...state,
                stateMarkerLat : '37.501947',
                stateMarkerLng : '127.034821'
            };
        case types.MOUSE_OVER1: 
            return {
                ...state,
                stateMarkerLat : '37.488724',
                stateMarkerLng : '127.009603'
            };
        case types.MOUSE_OVER2: 
            return {
                ...state,
                stateMarkerLat : '37.543327',
                stateMarkerLng : '126.840686'
            };
        case types.MOUSE_OVER3: 
            return {
                ...state,
                stateMarkerLat : '37.502579',
                stateMarkerLng : '127.090326'
            };
        case types.MOUSE_OVER4: 
            return {
                ...state,
                stateMarkerLat : '37.485772',
                stateMarkerLng : '127.015258'
            };
        case types.MOUSE_OVER5: 
            return {
                ...state,
                stateMarkerLat : '37.486597',
                stateMarkerLng : '127.013842'
            };
        case types.MOUSE_OVER6: 
            return {
                ...state,
                stateMarkerLat : '37.600667',
                stateMarkerLng : '127.098561'
            };
        case types.MOUSE_OVER7: 
            return {
                ...state,
                stateMarkerLat : '37.537926',
                stateMarkerLng : '126.996022'
            };
        case types.MOUSE_OVER8: 
            return {
                ...state,
                stateMarkerLat : '37.504804',
                stateMarkerLng : '126.998931'
            };
        case types.MOUSE_OVER9: 
            return {
                ...state,
                stateMarkerLat : '37.528102',
                stateMarkerLng : '126.920596'
            };
        case types.MOUSE_OUT:
            return {
                ...state,
                stateMarkerLat : '',
                stateMarkerLng : ''
            };
        default:
            return state;
    }
};


export default marker