import React from "react";
import { Container, Row } from "reactstrap";

import "./style.css";

const Footer = () => {
    return (
        <div id="footer" className="mt-5">
            <Container className="border-bottom">
                <Row className="align-items-center pt-3 pb-3">
                    <div className="col-12 col-lg-3 text-center">
                        <i class="fab fa-facebook-square"></i>
                        <a className="d-inline font-weight-5 pl-2" href="https://www.facebook.com/saigongaming" target="blank">
                            fanpage
                        </a>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <i class="fas fa-map-marker-alt"></i>
                        <a className="d-inline font-weight-5 pl-2" href="#">
                            285/37 Cách Mạng Tháng Tám, Phường 12, Quận 10
                        </a>
                    </div>
                    <div className="col-12 col-lg-3 text-center">
                        <i class="fas fa-phone-alt"></i>
                        <a className="d-inline font-weight-5 pl-2" href="tel:0854374769">
                            091 8888 955
                        </a>
                    </div>
                </Row>
            </Container>
            <Container className="pt-3">
                <Row>
                    <div className="col-12 text-center">
                        <p className="font-weight-5">Copyright © 2020 Claue. All rights reserved. Designed by Newt</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer