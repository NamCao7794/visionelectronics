import React, {Component} from 'react';
import Footer from "./Footer";

export default class DashboardPage extends Component {
    render() {
        return (
            // <!-- Page wrapper  -->
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* Page Content */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body"> This is some text within a card block. </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Content */}
                </div>

                <Footer/>
            </div>
            // <!-- End Page wrapper  -->
        );
    }
}