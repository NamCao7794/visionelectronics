import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            // <!-- ***** Header Area Start ***** -->
            <header className="header_area animated">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-10">
                            <div className="menu_area">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="">
                                        <img src="/img/logo@2x.png" title="Remark" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="fa fa-bars"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="ca-navbar">
                                        <ul className="navbar-nav ml-auto" id="nav">
                                            <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#about">About us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                        </ul>
                                        <div className="sing-up-button d-lg-none">
                                            <a href="">Login</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="sing-up-button d-none d-lg-block">
                                <a href="">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        // <!-- ***** Header Area End ***** -->
        );
    }
}