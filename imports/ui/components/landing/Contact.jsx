import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        return (
            // <!-- ***** Contact Us Area Start ***** -->
            <section className="footer-contact-area section_padding_100 clearfix" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <h2>Liên lạc với chúng tôi!</h2>
                                <div className="line-shape"></div>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                            <div className="address-text">
                                <p><span>Địa chỉ:</span> 268 Lý Thường Kiệt, Phường 14, Quận 10, TP Hồ Chí Minh</p>
                            </div>
                            <div className="phone-text">
                                <p><span>Điện thoại:</span> +84 967 171 263</p>
                            </div>
                            <div className="email-text">
                                <p><span>Email:</span> info.visionelectronics@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_from">
                                <form action="#" method="post">
                                    <div className="contact_input_area">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Họ và tên" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Nội dung *" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn submit-btn">Gửi ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        // <!-- ***** Contact Us Area End ***** -->
        );
    }
}