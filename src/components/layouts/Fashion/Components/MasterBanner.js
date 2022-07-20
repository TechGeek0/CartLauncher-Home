import React from 'react'
import {Link} from "gatsby";
import { Col, Container, Row } from "reactstrap";
// import { GatsbyImage } from 'gatsby-plugin-image';



const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
 
  return (
    <div>
      
      <div className={`home  ${classes ? classes : "text-center"}`} style={{backgroundImage: `url(${img})`}}>
     
      
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1>{desc}</h1>
                  <Link to={'#'}>
                    <button className={`btn btn-solid ${btnClass ? btnClass : ""}`}>
                      {btn ? btn : "Shop Now"}{" "}
                    </button >
                  </Link >
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
};

export default MasterBanner;



