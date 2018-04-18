import React, {Component} from 'react';

export default class Welcome extends Component {
    render() {
        return (
            // <!-- ***** Wellcome Area Start ***** -->
            <section className="wellcome_area clearfix" id="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md">
                            <div className="wellcome-heading">
                                <h2 className="welcome-title">Vision Electronics</h2>
                                <h3 className="welcome-title-char">V</h3>
                                <p className="welcome-content">Everything You Need. To Start Selling Online Beautifully</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // <!-- ***** Wellcome Area End ***** -->
        );
    }
}