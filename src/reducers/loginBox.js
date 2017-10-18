import * as types from '../actions/loginBoxActionTypes';


const initialState = {
        EmailId : "",
        Password : "",
        WarningMessage : "",
        HaveMessage : false
};

function loginBox(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_SUBMIT_IF_EMAIL: 
            return {
                ...state,
                WarningMessage : "이메일 주소를 입력하세요",
                HaveMessage : true
            }
        case types.HANDLE_SUBMIT_IF_PASSWORD:
            return {
                ...state,
                WarningMessage : "비밀번호를 입력하세요",
                HaveMessage : true
            }
        case types.HANDLE_SUBMIT_ELSE:
            return {
                ...state,
                WarningMessage : "이메일 주소 또는 비밀번호가 틀렸습니다.",
                HaveMessage : true
            }
        case types.HANDLE_SUBMIT_SET:
            return {
                ...state,
                WarningMessage : "", 
                HaveMessage : false
            };
        case types.HANDLE_CHANGE:
            return {
                ...state,
                [action.e.target.name]: action.e.target.value
            };
        
        default:
            return state;
    }
};


export default loginBox