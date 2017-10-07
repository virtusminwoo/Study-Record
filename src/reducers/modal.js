import * as types from '../actions/modalActionTypes';


const initialState = {
    showModal : false
};

function modal(state = initialState, action) {
    switch (action.type) {
        case types.MODAL_OPEN: 
            return {
                ...state,
                showModal : true
            };
        case types.MODAL_CLOSE:
            return {
                ...state,
                showModal : false
            };
        default:
            return state;
    }
};


export default modal