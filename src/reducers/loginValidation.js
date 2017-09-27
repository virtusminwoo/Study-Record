import * as types from '../actions/ActionTypes';


const initialState = {
        EmailId : '',
        Password : ''
};



function loginValidation(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_SUBMIT: 
            return 
                if(state.EmailId.length === 0){
                    alert('이메일을 입력해주세요');
                } else if(state.Password.length === 0){
                    alert('비밀번호를 입력해주세요');
                } else {
                    alert("잘입력하셨습니다")
                };
        
        default:
            return state;
    }
};

export default loginValidation;