import * as types from '../actions/sideBarPositionActionTypes';

const initialState = {
    scrollHeight : '',
    absoluteDiv : false
};


var windowScrollY = window.scrollY;

function sideBarPosition(state = initialState, action) {
    switch (action.type) {
        case types.SIDEBAR_POSITION_FIXED: 
            return {
                ...state,
                scrollHeight : windowScrollY,
                absoluteDiv : false
            };
        case types.SIDEBAR_POSITION_ABSOLUTE:
            return {
                ...state,
                scrollHeight : windowScrollY,
                absoluteDiv : true
            };
        default:
            return state;
    }
};


export default sideBarPosition