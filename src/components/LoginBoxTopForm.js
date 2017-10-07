import React, { Component } from 'react';
import LoginBoxTopFormLabel from './LoginBoxTopFormLabel'

class LoginBoxTopForm extends Component {
    constructor(props){
    super(props);
    this.state=({
        EmailId : "",
        Password : "",
        WarningMessage : "",
        HaveMessage : false
        })
    }


    
    HandleSubmitState(e){
        if(this.state.EmailId.length === 0 ){
                this.setState({
                    WarningMessage : "이메일 주소를 입력하세요",
                    HaveMessage : true
                })
                setTimeout(function() { this.setState({WarningMessage : "", HaveMessage : false}); }.bind(this), 3000);
                e.preventDefault()
            } else if(this.state.Password.length === 0 && this.state.EmailId.length !== 0 ){
                this.setState({
                    WarningMessage : "비밀번호를 입력하세요",
                    HaveMessage : true
                })
                setTimeout(function() { this.setState({WarningMessage : "", HaveMessage : false}); }.bind(this), 3000);
                e.preventDefault()
            } else {
                this.setState({
                    WarningMessage : "이메일 주소 또는 비밀번호가 틀렸습니다.",
                    HaveMessage : true
                })
                setTimeout(function() { this.setState({WarningMessage : "", HaveMessage : false}); }.bind(this), 3000);
                e.preventDefault()
            }
    }

    handleChange(e){
         const name = e.target.name;
         const value = e.target.value;
         this.setState({[name]: value})
     }
 


    render() {
        const isHaveMessage = this.state.HaveMessage
        return (
            <div className="LoginBoxTop"> 
            <h2 className={isHaveMessage? "WarningMessageH2" : ""}>{this.state.WarningMessage}</h2>
                <form className="LoginForm" onSubmit={this.HandleSubmitState.bind(this)}>
                    <h1>로그인</h1>
                    <div className="LoginBoxLogin">   
                        <LoginBoxTopFormLabel label={"이메일"} type={"text"} className={"EmailId"} name={"EmailId"} value={this.state.EmailId} onChange={this.handleChange.bind(this)}/>
                        <br />
                        <LoginBoxTopFormLabel label={"비밀번호"} type={"password"} className={"Password"} name={"Password"} value={this.state.Password} onChange={this.handleChange.bind(this)}/>
                        <br />
                        <button className="LoginButton" type="submit">로그인</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default LoginBoxTopForm;