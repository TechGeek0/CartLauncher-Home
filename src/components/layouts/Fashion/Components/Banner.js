import React, { Fragment } from "react"
import Slider from "react-slick"
// import {Link} from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner"

const Data = [
  {
    img: "/assets/images/Banner2.jpg",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "/left-sidebar/collection ",
  },
  {
    img: "/assets/images/Banner1.jpg",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "/left-sidebar/collection ",
  },
]

const Banner = props => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => 
             (
              <MasterBanner
                key={i}
                // img={props.data.allSliderImages.nodes[0].url.childImageSharp.fluid.src}
                desc={data.desc}
                title={data.title}
                link={data.link}
                img={data.img}
              />
            ))
          }
        </Slider>
      </section>
    </Fragment>
  )
}

export default Banner
