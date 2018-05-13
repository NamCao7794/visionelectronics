import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Register extends Component {
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var user = {};
        user.fullNameVar = ReactDOM.findDOMNode(this.refs.fullNameRegister).value.trim();
        user.userNamedVar = ReactDOM.findDOMNode(this.refs.userNameRegister).value.trim();
        user.emailVar = ReactDOM.findDOMNode(this.refs.emailRegister).value.trim();
        user.passwordVar = ReactDOM.findDOMNode(this.refs.passwordRegister).value.trim();
        user.agreeTermVar = ReactDOM.findDOMNode(this.refs.agreeTerm).checked;

        // Create new user
        if (user.agreeTermVar) {
            Meteor.call('createNewUser', user, function (err) {
                if (err) {
                    console.log('something went wrong :(');
                }
                else {
                    console.log('success');
                }
            });
        }

        // Clear form
        ReactDOM.findDOMNode(this.refs.fullNameRegister).value = '';
        ReactDOM.findDOMNode(this.refs.userNameRegister).value = '';
        ReactDOM.findDOMNode(this.refs.emailRegister).value = '';
        ReactDOM.findDOMNode(this.refs.passwordRegister).value = '';
    }

    render() {
        return (
            <div id="main-wrapper">
                <div className="unix-login">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="login-content card">
                                    <div className="login-form">
                                        <h4>Register</h4>
                                        <form onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" className="form-control" ref="fullNameRegister" required={"true"}/>
                                            </div>
                                            <div className="form-group">
                                                <label>User Name</label>
                                                <input type="text" className="form-control" ref="userNameRegister" required={"true"}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" ref="emailRegister" required={"true"}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" ref="passwordRegister" required={"true"}/>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" ref="agreeTerm" required={"true"}/> Agree the terms and policy
                                                </label>
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