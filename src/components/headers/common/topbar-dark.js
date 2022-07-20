import React from "react";
import { Container, Row, Col } from "reactstrap";
import {Link} from "gatsby";


const TopBarDark = ({ topClass, fluid }) => {
 
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to CartLauncher</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                  - 456 - 7890
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link href="#">
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i> wishlist
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`#`}>
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`#`}>
                      <a>Register</a>
                    </Link>
                  </li>
                  <li >
                    <a>Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
