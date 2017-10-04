import LoginForm from '../components/LoginForm';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    EmailId: state.loginValidationData.EmailId,
    Password: state.loginValidationData.Password,
    WarningMessage: state.loginValidationData.WarningMessage,
    HaveMessage: state.loginValidationData.HaveMessage
});


const mapDispatchToProps = (dispatch) => ({
    HandleSubmit: (e) => dispatch(actions.HandleSubmit(e)),
    HandleChangeEmailId: (e) => dispatch(actions.HandleChangeEmailId(e)),
    HandleChangePassword: (e) => dispatch(actions.HandleChangePassword(e))
});

const ContainerLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);


export default ContainerLoginForm;