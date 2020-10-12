import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./style.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div id="header">
            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <Link to="/">
                        <img src={Logo} width={140} height={70} alt="error"/>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto ml-5" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link className="header-link" to="/">Trang chủ</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ml-lg-5">
                                    <Link className="header-link" to="/books/all">Sản phẩm</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem className="ml-lg-5">
                                <NavLink>
                                    <Link className="header-link" to="/contact">Liên hệ</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;