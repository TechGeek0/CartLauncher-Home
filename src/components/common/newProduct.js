import React from "react";
// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
import { Media } from "reactstrap";
import Slider from "react-slick";
// import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
// import { Link } from "gatsby";

// const GET_PRODUCTS = gql`
//   query newProducts($type: String!) {
//     newProducts(type: $type) {
//       title
//       price
//       images {
//         alt
//         src
//       }
//     }
//   }
// `;

const NewProduct = (props) => {

//   const CurContect = useContext(CurrencyContext);
//   const symbol = CurContect.state.symbol;
//   var { loading, data } = useQuery(GET_PRODUCTS, {
//     variables: {
//       type: "fashion",
//     },
//   });


  return (
    // <!-- side-bar single product slider start -->
    <div className="theme-card">
      <h5 className="title-border">new product</h5>
     
      <Slider className="offer-slider slide-1">
        <div>
          {
          props.data.length === 0 ? (
            "loading"
          ) : (
            <>
              {props.data &&
                props.data.nodes.slice(0, 3).map((product, index) => (
                  <div className="media" key={index}>
                    <a href="">
                      <Media
                        className="img-fluid blur-up lazyload"
                        src={product?.thumbnail?.childImageSharp.fluid.src}


                        alt={product?.thumbnail?.childImageSharp.fluid.src}
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <div className="rating">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                      </div>
                      <a href={null}>
                        <h6>{product?.title.substring(0,12)}</h6>
                      </a>
                      <h4>
                        {/* {symbol} */}
                        {product?.price}
                      </h4>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <div>
          {
          props.data.length === 0 ? (
            "loading"
          ) : (
            <>
              {props.data &&
                props?.data.nodes.slice(4,7).map((product, index) => (
                  <div className="media" key={index}>
                    <a href="">
                      <Media
                        className="img-fluid blur-up lazyload"
                        src={product?.thumbnail.childImageSharp.fluid.src}
                        alt={product?.thumbnail.childImageSharp.fluid.src}
                      />
                    </a>
                    <div className="media-body align-self-center">
                      <div className="rating">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>
                      </div>
                      <a href={null}>
                        <h6>{product?.title.substring(0,12)}</h6>
                      </a>
                      <h4>
                        {/* {symbol} */}
                        {product?.price}
                      </h4>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </Slider>
        </div>
      
    
    //  <!-- side-bar single product slider end -->
  );
};

export default NewProduct;
