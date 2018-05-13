import React, {Component} from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            // <!-- Left Sidebar  -->
            <div className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-devider"></li>
                            <li className="nav-label">Home</li>
                            <li>
                                <a href="/dashboard/" aria-expanded="false">
                                    <i className="fa fa-tachometer"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-label">Apps</li>
                            <li>
                                <a href="#" aria-expanded="false">
                                    <i className="fa fa-android"></i>
                                    <span className="hide-menu">Android</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-expanded="false">
                                    <i className="fa fa-apple"></i>
                                    <span className="hide-menu">iOS</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            // <!-- End Left Sidebar  -->
        );
    }
}