import React, { Fragment } from "react";
// import {Link} from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import { Link } from 'gatsby';

const Data = [
  {
    img: "/assets/images/Col-banner.jpg",
    about: "men",
    offer: "10% off",
    link: "/left-sidebar/collection",
    class: "p-right text-center",
  },
  {
    img: "/assets/images/Col-banner-2.jpg",
    about: "women",
    offer: "10% off",
    link: "/left-sidebar/collection",
    class: "p-right text-center",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="6">
      <Link to='#'>
        <Link>
          <div className={`collection-banner ${classes}`}>
            <Media src={img} className="img-fluid" alt="" />
            <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
              </div>
            </div>
          </div>
        </Link >
      </Link >
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      {/*collection banner*/}
      <section className="pb-0">
        <Container>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      {/*collection banner end*/}
    </Fragment>
  );
};

export default CollectionBanner;
