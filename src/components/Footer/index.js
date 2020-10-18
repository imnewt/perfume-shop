import React from "react";
import { Container, Row } from "reactstrap";

import "./style.css";

const Footer = () => {
    return (
        <div id="footer" className="mt-5">
            <Container className="border-bottom">
                <Row className="align-items-center pt-3 pb-3">
                    <div className="col-6 text-center">
                        <i class="fab fa-facebook-square"></i>
                        <a className="d-inline font-weight-5 pl-2" href="https://www.facebook.com/perfume8888" target="blank">
                            Perfume8888
                        </a>
                    </div>
                    <div className="col-6 text-center">
                        <i class="fas fa-phone-alt"></i>
                        <a className="d-inline font-weight-5 pl-2" href="tel:0918888955">
                            091 8888 955
                        </a>
                    </div>
                </Row>
            </Container>
            <Container className="pt-3">
                <Row>
                    <div className="col-12 text-center">
                        <p className="font-weight-5">Copyright © 2020 Perfume8888. All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;