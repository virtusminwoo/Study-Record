import * as types from '../actions/dropDownActionTypes';


const initialState = {
        dropDownProduct : false,
        dropDownDeal : false,
        dropDownRoom : false,
        dropDownDeposit : false,
        dropDownFee : false,
        dropDownOption : false
};

function dropDown(state = initialState, action) {
    switch (action.type) {
        case types.CLICK_PRODUCT: 
            return {
                ...state,
                dropDownProduct: true,
                dropDownDeal : false,
                dropDownRoom : false,
                dropDownDeposit : false,
                dropDownRentalFee : false,
                dropDownOption : false
            };
        case types.CLICK_DEAL:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : true,
                dropDownRoom : false,
                dropDownDeposit : false,
                dropDownRentalFee : false,
                dropDownOption : false
            };
        case types.CLICK_ROOM:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : false,
                dropDownRoom : true,
                dropDownDeposit : false,
                dropDownRentalFee : false,
                dropDownOption : false
            };
        case types.CLICK_DEPOSIT:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : false,
                dropDownRoom : false,
                dropDownDeposit : true,
                dropDownFee : false,
                dropDownOption : false
            };
        case types.CLICK_RENTALFEE:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : false,
                dropDownRoom : false,
                dropDownDeposit : false,
                dropDownRentalFee : true,
                dropDownOption : false
            };
        case types.CLICK_OPTION:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : false,
                dropDownRoom : false,
                dropDownDeposit : false,
                dropDownRentalFee : false,
                dropDownOption : true
            };
        case types.CLICK_SET:
            return {
                ...state,
                dropDownProduct: false,
                dropDownDeal : false,
                dropDownRoom : false,
                dropDownDeposit : false,
                dropDownRentalFee : false,
                dropDownOption : false
            };
        default:
            return state;
    }
};


export default dropDown