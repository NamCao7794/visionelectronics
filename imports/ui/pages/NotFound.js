import React, {Component} from 'react';

export default class NotFound extends Component {
    render() {
        return (
            <div className="error-page" id="wrapper">
                <div className="error-box">
                    <div className="error-body text-center">
                        <h1>404</h1>
                        <h3 className="text-uppercase">Page not found</h3>
                        <p className="text-muted m-t-30 m-b-30">Please try after some time</p>
                        <a className="btn btn-info btn-rounded waves-effect waves-light m-b-40" href="/">Back
                            to home</a>
                    </div>
                    <footer className="footer text-center">Copyright &copy;2018 Vision Electronics. All rights reserved.</footer>
                </div>
            </div>
        );
    }
}