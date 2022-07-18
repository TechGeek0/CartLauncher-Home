import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col ,Media} from "reactstrap";
import DetailsWithPrice from "../common/detail-price";
import Slider  from "react-slick";

import ImageZoom from "../common/image-zoom";






const RightImagePage = (props) => {
  
  const data = props.data;

  
 
  

  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  var loading = false;

  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    vertical: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          vertical: false,
         
        },
      },
    ],
  };
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const { nav1, nav2 } = state;

  return (
    <section>
      <div className="collection-wrapper">
        <Container>
          {!data || data.length === 0 || loading ? (
            "loading"
          ) : (
            <Row>
              <Col lg="5" sm="10" xs="12">   
                <Slider
                  {...products}
                  asNavFor={nav2}
                  ref={(slider) => (slider1.current = slider)}
                  className="product-right-slick"
                >
                 
                 {data.product?.images.map((vari, index) => (
                    <div key={index}>
                      <ImageZoom image={vari.childImageSharp.fluid.src} alt={`${data.product.title}`}/>
                    </div>
                  ))
                  
}
                  
                
                
                </Slider>
              </Col>
              <Col lg="1" sm="2" xs="12">
                <Row >
                  <Slider
                    className="slider-nav"
                    {...productsnav}
                    asNavFor={nav1}
                    ref={(slider) => (slider2.current = slider)}
                  >
                    
                   
                    {data.product.images.map((vari, index) => (
                    <div key={index}>
                      <Media src={vari.childImageSharp.fluid.src}
                      key={index}
                      alt={`${data.product.Title}`}
                      
                     className=" img-fluid" />
                    </div>
                  ))}
                   
                        
                      
                  </Slider>
                </Row>
              </Col>
              <Col lg="6" className="rtl-text">
                <DetailsWithPrice
                  changeColorVar={changeColorVar}
                  item={data.product}
                  storeMetadata={data.metadata}
                />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
};



export default RightImagePage;
