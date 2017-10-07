import * as types from '../actions/dropDownActionTypes';


const initialState = {
        showProduct : false,
        showDeal : false,
        showRoom : false,
        showDeposit : false,
        showFee : false,
        showOption : false
};

function dropDown(state = initialState, action) {
    switch (action.type) {
        case types.CLICK_PRODUCT: 
            return {
                ...state,
                showProduct: true,
                showDeal : false,
                showRoom : false,
                showDeposit : false,
                showFee : false,
                showOption : false
            };
        case types.CLICK_DEAL:
            return {
                ...state,
                showProduct: false,
                showDeal : true,
                showRoom : false,
                showDeposit : false,
                showFee : false,
                showOption : false
            };
        case types.CLICK_ROOM:
            return {
                ...state,
                showProduct: false,
                showDeal : false,
                showRoom : true,
                showDeposit : false,
                showFee : false,
                showOption : false
            };
        case types.CLICK_DEPOSIT:
            return {
                ...state,
                showProduct: false,
                showDeal : false,
                showRoom : false,
                showDeposit : true,
                showFee : false,
                showOption : false
            };
        case types.CLICK_FEE:
            return {
                ...state,
                showProduct: false,
                showDeal : false,
                showRoom : false,
                showDeposit : false,
                showFee : true,
                showOption : false
            };
        case types.CLICK_OPTION:
            return {
                ...state,
                showProduct: false,
                showDeal : false,
                showRoom : false,
                showDeposit : false,
                showFee : false,
                showOption : true
            };
        case types.CLICK_SET:
            return {
                ...state,
                showProduct: false,
                showDeal : false,
                showRoom : false,
                showDeposit : false,
                showFee : false,
                showOption : false
            };
        default:
            return state;
    }
};


export default dropDown