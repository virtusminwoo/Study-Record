import React,{Component} from 'react';
import Label from '../../../common/Label'
import messages from './messages';
import Li from '../../../common/Li'
import './index.css';
import * as actions from '../../../actions/loginBoxActionCreators';
import { connect } from 'react-redux';

class LoginBox extends Component {

    HandleSubmitState(e){
        if(this.props.EmailId.length === 0 ){
                this.props.HandleSubmitIfEmail()
                setTimeout(this.props.HandleSubmitSet, 2000);
                e.preventDefault()
            } else if(this.props.Password.length === 0 && this.props.EmailId.length !== 0 ){
                this.props.HandleSubmitIfPassword()
                setTimeout(this.props.HandleSubmitSet, 2000);
                e.preventDefault()
            } else {
                this.props.HandleSubmitElse()
                setTimeout(this.props.HandleSubmitSet, 2000);
                e.preventDefault()
            }
    }

    render() {
        const isHaveMessage = this.props.HaveMessage
        return (
            <div className="loginBox">         
                <div className="loginBoxTop"> 
                <h2 className={isHaveMessage? "warningMessageH2" : ""}>{this.props.WarningMessage}</h2>
                    <form className="loginForm" onSubmit={this.HandleSubmitState.bind(this)}>
                        <h1>{messages.formH1.text}</h1>
                        <div className="loginFormGroup">   
                            <Label label={messages.labelEmail.label} type={messages.labelEmail.type} className="labelEmail" name={messages.labelEmail.name} value={this.props.EmailId} onChange={this.props.HandleChange} /><br />
                            <Label label={messages.labelPassword.label} type={messages.labelPassword.type} className="labelPassword" name={messages.labelPassword.name} value={this.props.Password} onChange={this.props.HandleChange} /><br />
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


const mapStateToProps = (state) => ({
    EmailId: state.loginBoxData.EmailId,
    Password: state.loginBoxData.Password,
    WarningMessage: state.loginBoxData.WarningMessage,
    HaveMessage: state.loginBoxData.HaveMessage,
});


const mapDispatchToProps = (dispatch) => ({
    HandleSubmitIfEmail: () => dispatch(actions.HandleSubmitIfEmail()),
    HandleSubmitIfPassword: () => dispatch(actions.HandleSubmitIfPassword()),
    HandleSubmitElse: () => dispatch(actions.HandleSubmitElse()),
    HandleSubmitSet: () => dispatch(actions.HandleSubmitSet()),
    HandleChange: (e) => dispatch(actions.HandleChange(e)),
});

LoginBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBox);

export default LoginBox;