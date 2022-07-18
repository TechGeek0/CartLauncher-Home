import React, { Fragment } from 'react';
import { Container ,Row ,Col ,Media} from 'reactstrap';
import {Link} from "gatsby";

const CopyRight = ({layout, fluid}) => {
    return (
        <Fragment>
            <div className={`sub-footer ${layout}`}>
                <Container fluid={fluid}>
                    <Row>
                        <Col xl="6" md="6" sm="12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> Accelerone</p>
                            </div>
                        </Col>
                        <Col xl="6" md="6" sm="12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <Link to="#"><Media src={"/assets/images/icon/visa.png"} alt="" /></Link >
                                    </li>
                                    <li>
                                        <Link to="#"><Media src={"/assets/images/icon/mastercard.png"} alt="" /></Link >
                                    </li>
                                    <li>
                                        <Link to="#"><Media src={"/assets/images/icon/paypal.png"} alt="" /></Link >
                                    </li>
                                    <li>
                                        <Link to="#"><Media src={"/assets/images/icon/american-express.png"} alt="" /></Link >
                                    </li>
                                    <li>
                                        <Link to="#"><Media src={"/assets/images/icon/discover.png"} alt="" /></Link >
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default CopyRight;