import React, {Component} from 'react';

export default class Team extends Component {
    render() {
        return (
            // <!-- ***** Our Team Area Start ***** -->
            <section className="our-Team-area bg-white section_padding_0_50 clearfix" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="section-heading">
                                <h2>Đội ngũ</h2>
                                <div className="line-shape"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="img/team-img/thangtran.jpg" alt="ThangTran" />
                                        <div className="team-hover-effects">
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="member-text">
                                    <h4>Trần Quang Thắng</h4>
                                    <p>CEO-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="img/team-img/namcao.jpg" alt="NamCao" />
                                        <div className="team-hover-effects">
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="member-text">
                                    <h4>Cao Hoài Nam</h4>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="img/team-img/tuhoang.jpg" alt="TuHoang" />
                                        <div className="team-hover-effects">
                                            <div className="team-social-icon">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                <a href="#"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="member-text">
                                    <h4>Hoàng Ngọc Tú</h4>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        // <!-- ***** Our Team Area End ***** -->
        );
    }
}