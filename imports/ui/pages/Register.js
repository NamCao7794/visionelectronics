import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';
import Alert from 'react-s-alert';

export default class Register extends Component {
    checkPassword(pass, passCorfirm) {
        return !pass.localeCompare(passCorfirm);
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        let user = {};
        user.fullNameVar = ReactDOM.findDOMNode(this.refs.fullNameRegister).value.trim();
        user.userNamedVar = ReactDOM.findDOMNode(this.refs.userNameRegister).value.trim();
        user.emailVar = ReactDOM.findDOMNode(this.refs.emailAddressRegister).value.trim();
        user.passwordVar = ReactDOM.findDOMNode(this.refs.passwordRegister).value.trim();
        user.confirmPasswordVar = ReactDOM.findDOMNode(this.refs.confirmPasswordRegister).value.trim();
        user.agreeTermVar = ReactDOM.findDOMNode(this.refs.agreeTerm).checked;

        let isMatchPassword = this.checkPassword(user.passwordVar, user.confirmPasswordVar);

        // Create new user
        if (user.agreeTermVar && isMatchPassword) {
            Meteor.call('createNewUser', user, function (error) {
                if (error) {
                    Alert.error(error.reason, {
                        effect: 'stackslide',
                        position: 'top',
                        timeout: 2500,
                        onRouteClose: false,
                        stack: false,
                    });
                }
                else {
                    $(location).attr("href", '/dashboard/');
                }
            });
        }
    }

    render() {
        return (
            <div id="main-wrapper">
                <Alert/>
                <div className="unix-login">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="login-content card">
                                    <div className="login-form form-validation">
                                        <h4>Register</h4>
                                        <form className="authRegisterForm" onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="form-group">
                                                <label>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" ref="fullNameRegister" name="fullNameRegister"/>
                                            </div>
                                            <div className="form-group">
                                                <label>User Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" ref="userNameRegister" name="userNameRegister"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" ref="emailAddressRegister" name="emailAddressRegister"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" ref="passwordRegister" id="passwordRegister" name="passwordRegister"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" ref="confirmPasswordRegister" id="confirmPasswordRegister" name="confirmPasswordRegister"/>
                                            </div>
                                            <div className="form-group checkbox">
                                                <input type="checkbox" ref="agreeTerm" name="agreeTerm" required={"true"}/> Agree the terms and policy
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Register
                                            </button>
                                            <div className="register-link m-t-15 text-center">
                                                <p>Already have account ? <a href="/login"> Sign in</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}