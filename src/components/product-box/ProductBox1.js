import React, {  useState } from "react";
import {Link} from "gatsby";

import { Row, Col, Media, Modal, ModalBody } from "reactstrap";

import MasterProductDetail from "./MasterProductDetail";
import slugify from 'slugify'





const ProductItem = ({
  product,
 filters,
 onSort,
  backImage,
  // des,
  addWishlist,
  cartClass,
  // productDetail,
  addCompare,
  addToCart,
  
}) => {
    console.log(product,'hello')
  // const [stock] = useState(product.quantity);
  // const [quantity,setQuantity] = useState(1);
  
//   const addToCartHandler = () => {
//     if (0 !== stock) addToCart({ ...product, quantity, stock });
//   };
  
//   const plusQty = () => {

// if(stock >= quantity){
//   setQuantity(quantity + 1);
// }

//   }

//   const minusQty = () => {
//     if(quantity > 1){
//       setQuantity(quantity - 1);
//     }
//   }

//   const changeQty =(e) => {

// const quantity = parseInt(e.target.value);
// if(quantity > 0 && stock +1 >= quantity){
//   setQuantity(quantity);
// }


//   }


  
  // eslint-disable-next-line
  
  // const cartContext = useContext(CartContext);
  // const curContext = useContext(CurrencyContext);
  // const currency = curContext.state;
  // const plusQty = cartContext.plusQty;
  // const minusQty = cartContext.minusQty;
  // const quantity = cartContext.quantity;
  // const setQuantity = cartContext.setQuantity;

  // const [image, setImage] = useState("");
  const [modal, setModal] = useState(false);
  const [modalCompare, setModalCompare] = useState(false);
  const toggleCompare = () => setModalCompare(!modalCompare);
  const toggle = () => setModal(!modal);
  // const uniqueTags = [];

  // const onClickHandle = (img) => {
  //   setImage(img);
  // };

  // const changeQty = (e) => {
  //   // setQuantity(parseInt(e.target.value));
  // };
  // console.log(product)

  // const clickProductDetail = () => {
  //   const titleProps = product.title.split(" ").join("");
  //   Router.push(`/product-details/${product.id}` + "-" + `${titleProps}`);
  // };

  // const variantChangeByColor = (imgId, product_images) => {
  //   product_images.map((data) => {
  //     if (data.image_id == imgId) {
  //       setImage(data.src);
  //     }
  //   });
  // };
  return (
    <div className="product-box product-wrap">
      <div className="img-wrapper">
        <div className="lable-block">
          {/* {product.new === true ? <span className="lable3">new</span> : ""}
          {product.sale === true ? <span className="lable4">on sale</span> : ""} */}
        </div>
        <div className="front" >
          {}
          <Link  >
          <Media
            src={`${product.image}`}
            className="img-fluid"
            alt={`${product.price}`}
          />
          </Link >
        </div>
          {backImage ? (
          product.image === "undefined" ? (
            "false"
          ) : (
            <div className="back" >
              <Link  >
               <Media
                src={`${ product.image}`}
                className="img-fluid m-auto"
                alt={`${product.name}`}
              /> 
              </Link >
            </div>
          )
        ) : (
          ""
        )} 

        
        

        <div className={cartClass}>
          <button title="Add to cart" >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          {/* <Link  to={null} title="Add to Wishlist" onClick={addWishlist}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </Link > */}
          <a  href={null} title="Quick View" >
            <i className="fa fa-search" aria-hidden="true"></i>
          </a >
          {/* <a  href={null} title="Compare" onClick={toggleCompare}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </a > */}
          <Modal
            isOpen={modalCompare}
            toggle={toggleCompare}
            size="lg"
            centered
          >
            <ModalBody>
              <Row className="compare-modal">
                
                <Col lg="12">
                  <div className="media">
                    <Media
                      src={`${product.image}`}
                      alt={`${product.name}`}
                      className="img-fluid"
                    />
                    <div className="media-body align-self-center text-center">
                      <h5>
                        <i className="fa fa-check"></i>Item{" "}
                        {/* {console.log(product.Title)} */}
                        
                        <span>{product.name}</span>
                        <span>successfully added to your Compare list</span>
                      </h5>
                      <div className="buttons d-flex justify-content-center">
                        <Link to="/page/compare">
                          <Link 
                            to={null}
                            className="btn-sm btn-solid"
                            onClick={addCompare}
                          >
                            View Compare list
                          </Link >
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                
              </Row>
            </ModalBody>
          </Modal>
        </div>
        {/* {product.images ? (
          <ul className="product-thumb-list">
            {product.images.map((img, i) => (
              <li
                className={`grid_thumb_img ${
                  img.src === image ? "active" : ""
                }`}
                key={i}
              >
                <Link  to={null} title="Add to Wishlist">
                  <Media
                    src={`${img.src}`}
                    alt="wishlist"
                    onClick={() => onClickHandle(img.src)}
                  />
                </Link >
              </li>
            ))}
          </ul>
        ) : (
          ""
        )} */}
      </div>
      <MasterProductDetail
        product={product}
       
        // currency={currency}
       
        // variantChangeByColor={variantChangeByColor}
      />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-lg quickview-modal"
        centered
      >
        <ModalBody>
          <Row>
            <Col lg="6" xs="12">
              <div className="quick-view-img">
                {/* <Media
                  src={`${
                    product.images[0].childImageSharp.fluid.src
                  }`}
                  alt={`${product.title}`}
                  className="img-fluid"
                /> */}
              </div>
            </Col>
            
            <Col lg="6" className="rtl-text">
              <div className="product-right">
                <h2> {product.name} </h2>
                <h3>
                  {/* {currency.symbol} */}
                  {product.price }
                </h3>
                {/* {product.Brand ? (
                  <ul className="color-variant">
                    {uniqueTags ? (
                      <ul className="color-variant">
                        {product.type === "jewellery" ||
                        product.type === "nursery" ||
                        product.type === "beauty" ||
                        product.type === "electronics" ||
                        product.type === "goggles" ||
                        product.type === "watch" ||
                        product.type === "pets" ? (
                          ""
                        ) : (
                          <>
                            {uniqueTags.map((vari, i) => {
                              return (
                                <li
                                  className={vari.color}
                                  key={i}
                                  title={vari.color}
                                  onClick={() =>
                                    variantChangeByColor(
                                      vari.image_id,
                                      product.images
                                    )
                                  }
                                ></li>
                              );
                            })}
                          </>
                        )}
                      </ul>
                    ) : (
                      ""
                    )}
                  </ul>
                ) : (
                  ""
                )} */}
                <div className="border-product">
                  <h6 className="product-title">product details</h6>
                  <p>{product.description}</p>
                </div>
                <div className="product-description border-product">
                  {/* {product.size ? (
                    <div className="size-box">
                      <ul>
                        {product.size.map((size, i) => {
                          return (
                            <li key={i}>
                              <Link  to={null}>{size}</Link >
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )} */}
                  <h6 className="product-title">quantity</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-left-minus"
                          // onClick={minusQty}
                          // onClick={minusQty}

                          data-type="minus"
                          data-field=""
                        >
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        // value={quantity}
                        
                        
                        // onChange={changeQty}
                        
                        required
                      
                        className="form-control input-number"
                      />
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-right-plus"
                          // onClick={() => plusQty(product)}
                          // onClick={plusQty}
                          data-type="plus"
                          data-field=""
                        >
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons">
                  <button
                    className="btn btn-solid"
                    // onClick={addToCartHandler}
                  >
                    add to cart
                  </button>
                  <Link >
                  <button
                  
                    className="btn btn-solid"
                                      >
                    View detail
                  </button>
                 </Link >
                </div>
              </div>
            </Col>
            
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProductItem;
