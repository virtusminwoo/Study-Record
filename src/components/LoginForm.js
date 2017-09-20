import React, { Component } from 'react';
// import LoginBoxLogin from './LoginBoxLogin';  쓸지 고민해보기


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            EmailId : '',
            Password : ''
        };
 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmailId = this.handleChangeEmailId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
 
    handleSubmit(e){
        if(this.state.EmailId.length === 0){
            alert('이메일을 입력해주세요');
        } else if(this.state.Password.length === 0){
            alert('비밀번호를 입력해주세요');
        } else {
            alert("잘입력하셨습니다")
        }
    }
 
    handleChangeEmailId(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
      
    }

    handleChangePassword(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }


    render() {
        return (
            
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <h1>로그인</h1>
                <div className="LoginBoxLogin">   
                    <label>이메일</label>
                    <input type="text" className="EmailId" name="EmailId" value={this.state.EmailId} onChange={this.handleChangeEmailId}/>
                    <br />
                    <label>비밀번호</label>
                    <input type="password" className="Password"  name="Password" value={this.state.Password} onChange={this.handleChangePassword}/>
                    <br />
                    <button className="LoginButton" type="submit">로그인</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;