import * as types from '../actions/ActionTypes';
import LoginForm from '../components/LoginForm'


const initialState = {
        EmailId : '',
        Password : '',
        WarningMessage : "",
        HaveMessage : ""
};


function loginValidation(state = initialState, action, e) {
    switch (action.type) {
        case types.HANDLE_CHANGE_EMAILID: 
            return{
                ...state,
                EmailId : action.e
            };

        case types.HANDLE_CHANGE_PASSWORD: 
            return{
                ...state,
                Password : action.e
            };

        case types.HANDLE_SUBMIT: 
            
                    return state
                    
                
        
        default:
            return state;
    }
};

export default loginValidation;