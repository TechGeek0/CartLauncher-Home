import React from "react";
import Slider from "react-slick";
import { Row, Col, Media, Container } from "reactstrap";


const data = [

{
  image :'/assets/images/insta1.jpg'
},
{
  image :'/assets/images/insta2.jpg'
},
{
  image :'/assets/images/insta3.jpg'
},
{
  image :'/assets/images/insta4.jpg'
},
{
  image :'/assets/images/insta5.jpg'
},
{
  image :'/assets/images/insta6.jpg'
},


]

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Instagram = ({ type }) => {


  return (
    <section className="instagram ratio_square">
      <Container
        className={`${
          type == "nursery" ||
          type == "bags" ||
          type == "fashion" ||
          type == "christmas" ||
          type == "fashion"
            ? "p-0"
            : ""
        }`}
        fluid={true}
      >
        <Row>
          <Col className="pt-0">
            <h2 className="title-borderless"># instagram</h2>
            <div className="slide-7 no-arrow slick-instagram">
              <Slider {...settings}>
                {data &&
                  data.map((data, i) => (
                    <div key={i}>
                      <a href={null}>
                        <div className="instagram-box">
                          <Media
                            alt=""
                            src={data.image}
                            className="bg-img"
                            style={{ width: "100%" }}
                          />
                          <div className="overlay">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Instagram;
