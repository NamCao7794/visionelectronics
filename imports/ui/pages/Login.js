import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const emailLogin = ReactDOM.findDOMNode(this.refs.emailLogin).value.trim();
        const passwordLogin = ReactDOM.findDOMNode(this.refs.passwordLogin).value.trim();
        // Tasks.insert({
        //     text,
        //     createdAt: new Date(), // current time
        // });
        // Clear form
        ReactDOM.findDOMNode(this.refs.emailLogin).value = '';
        ReactDOM.findDOMNode(this.refs.passwordLogin).value = '';
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
                                        <h4>Login</h4>
                                        <form onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" ref="emailLogin"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" ref="passwordLogin"/>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" ref="rememberMe"/> Remember Me
                                                </label>
                                                <label className="pull-right">
                                                    <a href="/forgot-password">Forgotten Password?</a>
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Sign in</button>
                                            <div className="register-link m-t-15 text-center">
                                                <p>Don't have account ? <a href="/register"> Sign Up Here</a></p>
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