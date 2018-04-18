import React, {Component} from 'react';

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <AwesomeFeatures></AwesomeFeatures>
                <VideoFeatures></VideoFeatures>
                <CoolFactsFeatures></CoolFactsFeatures>
            </React.Fragment>
        );
    }
}

class AwesomeFeatures extends Component {
    render() {
        return (
            //<!-- ***** Awesome Features Start ***** -->
            <section className="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Awesome Features</h2>
                                <div className="line-shape"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-user" aria-hidden="true"></i>
                                <h5>Awesome Experience</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-pulse" aria-hidden="true"></i>
                                <h5>Fast and Simple</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-dashboard" aria-hidden="true"></i>
                                <h5>Clean Code</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-palette" aria-hidden="true"></i>
                                <h5>Perfect Design</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-crown" aria-hidden="true"></i>
                                <h5>Best Industry Leader</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-feature">
                                <i className="ti-headphone" aria-hidden="true"></i>
                                <h5>24/7 Online Support</h5>
                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            // <!-- ***** Awesome Features End ***** -->
        );
    }
}

class VideoFeatures extends Component {
    render() {
        return (
            // <!-- ***** Video Area Start ***** -->
            <div className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-area">
                                <div className="video-play-btn">
                                    <a href="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn">
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <!-- ***** Video Area End ***** -->
        );
    }
}

class CoolFactsFeatures extends Component {
    render() {
        return (
            // <!-- ***** Cool Facts Area Start ***** -->
            <section className="cool_facts_area clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                                <div className="counter-area">
                                    <h3><span class="counter">90</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <i className="ion-arrow-down-a"></i>
                                    <p>APP <br/> DOWNLOADS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                <div className="counter-area">
                                    <h3><span className="counter">120</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <i className="ion-happy-outline"></i>
                                    <p>Happy <br/> Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.6s">
                                <div className="counter-area">
                                    <h3><span className="counter">40</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <i className="ion-person"></i>
                                    <p>ACTIVE <br/>ACCOUNTS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.8s">
                                <div className="counter-area">
                                    <h3><span className="counter">10</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <i className="ion-ios-star-outline"></i>
                                    <p>TOTAL <br/>APP RATES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        // <!-- ***** Cool Facts Area End ***** -->
        );
    }
}