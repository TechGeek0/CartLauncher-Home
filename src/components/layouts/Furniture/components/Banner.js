import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "/assets/images/furniture/furbanner.jpg",
    title: "furniture sofa",
    desc: "harmony sofa",
    link: "#",
    classes: "text-left",
  },
  {
    img: "/assets/images/furniture/furbanner2.jpg",
    title: "furniture sofa",
    desc: "harmony chair",
    link: "#",
    classes: "text-left",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                link={data.link}
                title={data.title}
                desc={data.desc}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
