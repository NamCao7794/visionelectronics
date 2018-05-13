import React, {Component} from 'react';
import Header from "../components/client/Header";
import Sidebar from "../components/client/Sidebar";
import DashboardPage from "../components/client/DashboardPage";
import Preloader from "../components/client/Preloader";

export default class ClientDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Preloader/>
                <div id={"main-wrapper"}>
                    <Header/>
                    <Sidebar/>
                    <DashboardPage/>
                </div>
            </React.Fragment>
        );
    }
}