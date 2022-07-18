import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
// import Link from 'next/link';


const Data = [
  {
    img: "/assets/images/electronics/electronic1.jpg",
    offer: "save 30%",
    title: "Electronic",
    btn: "shop now",
  },
  {
    img: "/assets/images/electronics/electronic2.jpg",
    offer: "save upto 30%",
    title: "headphone",
    btn: "shop now",
  },
];

const Banner = ({ img, offer, title, btn }) => {
  return (
    <div>
      <div className={`home text-center`} style={{backgroundImage: `url(${img})`}}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{offer}</h4>
                  <h1>{title}</h1>
                  <a href="#" className="btn btn-solid">
                    {btn}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
const HomeBanner = () => {
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider">
        {Data.map((data, i) => {
          return (
            <Banner
              key={i}
              img={data.img}
              offer={data.offer}
              title={data.title}
              btn={data.btn}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeBanner;
