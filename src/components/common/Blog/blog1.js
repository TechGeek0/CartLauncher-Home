import React, { Fragment } from "react";
import Slider from "react-slick";

import { Slider3 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";



const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {
  
const blog = [
  {
    title: "Fashion",
    image: "/assets/images/Blog.jpg",
    link: "/fashion",
    description:'Hello',
    date:'12/12/2019'
  },
  {
    title: "Fashion2",
    image: "/assets/images/Blog.jpg",
    link: "/fashion",
    description:'Welcome',
    date:'12/12/2019'

  },
  {
    title: "Fashion3",
    image: "/assets/images/Blog.jpg",
    link: "/fashion",
    description:'Welcome2',
    date:'12/12/2020'

  },
  {
    title: "Fashion4",
    image: "/assets/images/Blog.jpg",
    link: "/fashion",
    description:'Welcome4',
    date:'12/12/2021'

  }

];
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h4>our collection</h4>
                <h2 className={inner}>special products</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider {...Slider3} className="slide-3 no-arrow ">
                {blog &&
                  blog.map((item, index) => (
                    <Col md="12" key={index}>
                      <Link href={`/blogs/blog_detail`}>
                        <div className="classic-effect">
                          <Media src={item.image} className="img-fluid" alt="" />
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.title}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.description} </p>
                        </Link>
                        <hr className="style1" />
                        <h6>by: {item.date}</h6>
                      </div>
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;




