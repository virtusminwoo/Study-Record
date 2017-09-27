import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    EmailId: state.oginValidationData.EmailId,
    Password: state.oginValidationData.Password
});


const mapDispatchToProps = (dispatch) => ({
    HandleSubmit: () => dispatch(actions.HandleSubmit())
});

const ContainerLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);


export default ContainerLoginForm;