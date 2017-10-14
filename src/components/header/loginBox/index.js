import React,{Component} from 'react';
import Label from '../../../common/Label'
import messages from './messages';
import Li from '../../../common/Li'
import './index.css';

class Modal extends Component {
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
            <div className="loginBox">         
                <div className="loginBoxTop"> 
                <h2 className={isHaveMessage? "warningMessageH2" : ""}>{this.state.WarningMessage}</h2>
                    <form className="loginForm" onSubmit={this.HandleSubmitState.bind(this)}>
                        <h1>{messages.formH1.text}</h1>
                        <div className="loginFormGroup">   
                            <Label label={messages.labelEmail.label} type={messages.labelEmail.type} className="labelEmail" name={messages.labelEmail.name} value={this.state.EmailId} onChange={this.handleChange.bind(this)} /><br />
                            <Label label={messages.labelPassword.label} type={messages.labelPassword.type} className="labelPassword" name={messages.labelPassword.name} value={this.state.Password} onChange={this.handleChange.bind(this)} /><br />
                            <button type={messages.buttonLogin.type} className="buttonLogin">{messages.buttonLogin.text}</button>
                        </div>
                    </form>
                </div>
                <div className="loginBoxBottom">
                    <Li className="optionLogin" items={messages.optionLogin.items} />
                    <div>
                        <button className="buttonKakao">{messages.buttonKakao.text}</button>
                        <button className="buttonFacebook">{messages.buttonFacebook.text}</button>
                        <br /><br /><hr /><br />
                        <p className="proRegisterP">{messages.proRegisterP.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;