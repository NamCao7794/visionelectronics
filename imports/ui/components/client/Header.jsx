import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            // <!-- HEADER  -->
            <div className="header">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    {/* Logo */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">
                            <b><img src="/img/logo-blue.png" alt="homepage" className="dark-logo" /></b>
                        </a>
                    </div>
                    {/* END Logo */}
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-md-0">
                            <li className="nav-item">
                                <a className="nav-link nav-toggler hidden-md-up text-muted" href="javascript:void(0)">
                                    <i className="mdi mdi-menu"></i>
                                </a>
                            </li>
                            <li className="nav-item m-l-10">
                                <a className="nav-link sidebartoggler hidden-sm-down text-muted" href="javascript:void(0)">
                                    <i className="ti-menu"></i>
                                </a>
                            </li>
                            {/* Language */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="flag-icon flag-icon-us"></i>
                                </a>
                                <div className="dropdown-menu animated zoomIn">
                                    <a className="dropdown-item" href="#">
                                        <i className="flag-icon flag-icon-vn"></i> Vietnam
                                    </a>
                                </div>
                            </li>
                        </ul>
                        {/* User profile and search */}
                        <ul className="navbar-nav my-lg-0">
                            {/* Notification */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-bell"></i>
                                    <div className="notify">
                                        <span className="heartbit"></span>
                                        <span className="point"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
                                    <ul>
                                        <li><div className="drop-title">Notifications</div></li>
                                        <li>
                                            <div className="message-center">
                                                {/* Message */}
                                                <a href="#">
                                                    <div className="btn btn-danger btn-circle m-r-10"><i className="fa fa-link"></i></div>
                                                    <div className="mail-contnet">
                                                        <h6>This is title</h6> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="#">
                                                    <div className="btn btn-success btn-circle m-r-10"><i className="ti-calendar"></i></div>
                                                    <div className="mail-contnet">
                                                        <h6>This is another title</h6> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="#">
                                                    <div className="btn btn-info btn-circle m-r-10"><i className="ti-settings"></i></div>
                                                    <div className="mail-contnet">
                                                        <h6>This is title</h6> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="#">
                                                    <div className="btn btn-primary btn-circle m-r-10"><i className="ti-user"></i></div>
                                                    <div className="mail-contnet">
                                                        <h6>This is another title</h6> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* End Notification */}

                            {/* Profile */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="/img/image-user-profile.jpg" alt="user" className="profile-pic" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                                    <ul className="dropdown-user">
                                        <li><a href="#"><i className="ti-user"></i> Profile</a></li>
                                        <li><a href="#"><i className="ti-settings"></i> Setting</a></li>
                                        <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        // <!-- End HEADER -->
        );
    }
}