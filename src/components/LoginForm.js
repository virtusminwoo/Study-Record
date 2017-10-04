import React, { Component } from 'react';


class LoginForm extends Component {
    constructor(props){
    super(props);
    this.state=({
        
    WarningMessage : "",
    HaveMessage : false
    })
}


    
    HandleSubmitState(e){
        if(this.props.EmailId.length === 0 ){
                this.setState({
                    WarningMessage : "이메일 주소를 입력하세요",
                    HaveMessage : true
                })
                setTimeout(function() { this.setState({WarningMessage : "", HaveMessage : false}); }.bind(this), 3000);
                e.preventDefault()
            } else if(this.props.Password.length === 0 && this.props.EmailId.length !== 0 ){
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

    render() {
        const isHaveMessage = this.state.HaveMessage
        return (
            <div>
            <h2 className={isHaveMessage? "WarningMessageH2" : ""}>{this.state.WarningMessage}</h2>
                <form className="LoginForm" onSubmit={this.HandleSubmitState.bind(this)}>
                    
                    <h1>로그인</h1>
                    <div className="LoginBoxLogin">   
                        <label>이메일</label>
                        <input type="text" className="EmailId" name="EmailId" defaultValue={this.props.EmailId} onChange={(e) => this.props.HandleChangeEmailId(e.target.value)}/>
                        <br />
                        <label>비밀번호</label>
                        <input type="password" className="Password"  name="Password" defaultValue={this.props.Password} onChange={(e) => this.props.HandleChangePassword(e.target.value)}/>
                        <br />
                        <button className="LoginButton" type="submit">로그인</button>
                    </div>
                </form>
            </div>
        );
    }
}


LoginForm.defaultProps = {
    EmailId : '',
    Password : ''
};

export default LoginForm;