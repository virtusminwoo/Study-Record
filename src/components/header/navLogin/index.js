import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/modalActionCreators';

import NavLoginLi from '../navLoginLi';
import Modal from '../modal'
import messages from './messages';
import './index.css'


class NavLogin extends Component{
    render(){

    let loginModal;
    if(this.props.showModal===true){
        loginModal = (
            <Modal onClick={this.props.CloseModal} />
        )
    } else if (this.props.showModal === false){
        loginModal = null
    }

    return (
            <div className="navLogin">
                <ul>
                    <NavLoginLi liText={messages.proRegister.liText} />
                    <NavLoginLi liText={messages.login.liText} onClick={this.props.OpenModal}/>
                    {loginModal}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showModal: state.modalData.showModal
});


const mapDispatchToProps = (dispatch) => ({
    OpenModal: () => dispatch(actions.OpenModal()),
    CloseModal: () => dispatch(actions.CloseModal())
});

NavLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLogin);


export default NavLogin;