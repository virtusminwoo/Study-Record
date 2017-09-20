import React, { Component } from 'react';
import Modal from './Modal';

        class NavLogin extends Component {
            constructor(){
                super(...arguments);
                this.state = {
                    showModal : false
                }
            }

            LoginModal(){
                this.setState({showModal: !this.state.showModal})
            }

            render() {
                let loginModal;
                    if(this.state.showModal){
                        loginModal = (
                                <Modal />
                        )
                    }
                return(
                    <ul>
                        <li onClick={this.LoginModal.bind(this)}>
                            <a href = "#">
                                {this.props.NavLoginData.title}
                            </a>
                        </li>
                        {loginModal}
                    </ul>
                );
            }
        }
        
        export default NavLogin;