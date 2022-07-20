import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const TopBar = ({topClass}) => {
    return (
        <div  id="topHeader" className={`top-header ${topClass? topClass: ''}`}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>{('call_us')}:  123 - 456 - 7890</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist compare-mobile">
                                <Link href={`#`}>
                                    <a><i className="fa fa-random" aria-hidden="true"></i>{'compare'}</a >
                                </Link>
                            </li>
                            <li className="mobile-wishlist">
                                <Link href={`#`}>
                                    <i className="fa fa-heart" aria-hidden="true"></i>{('wishlist')}</Link >
                                
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {('my_account')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link href={`#`} >
                                            Login</Link >
                                       
                                    </li>
                                    <li>
                                        <Link href={`#`} >
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopBar;