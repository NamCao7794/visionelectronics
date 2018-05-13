import React, {Component} from 'react';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <div className="unix-login">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="login-content card">
                                    <div className="login-form">
                                        <h4>Forgot Password</h4>
                                        <form>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" name="emailReset" id="emailReset"/>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Submit</button>
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