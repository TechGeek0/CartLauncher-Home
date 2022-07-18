import React, { useState } from "react";
// import {Link} from "react-router-dom";

import { connect } from "react-redux";
import { addToCart,incrementQty,decrementQty } from "../../reducers/cart";

import CountdownComponent from "../common/widgets/countdownComponent";
import MasterSocial from "./master_social";
import { Link } from "gatsby";
import IconBox from "./widgets/IconBox";

const DetailsWithPrice = ({ item, stickyClass, changeColorVar ,addToCart,storeMetadata,location}) => {
  const [modal, setModal] = useState(false);
  // const [stock] = useState(item.quantity);

  const toggle = () => setModal(!modal);

  const[quantity,setQuantity] = useState(1);
  const [stock] = useState(item.quantity);

  const plusQty = () => {

    if(stock >= quantity){
      setQuantity(quantity + 1);
    }
    
      }
    
      const minusQty = () => {
        if(quantity > 1){
          setQuantity(quantity - 1);
        }
      }
    
      const changeQty =(e) => {
    
    const quantity = parseInt(e.target.value);
    if(quantity > 0 && stock +1 >= quantity){
      setQuantity(quantity);
    }
    
    
      }

  const addToCartHandler = () => {
    if (0 !== stock)
      addToCart({
        ...item,
        quantity: quantity,
        stock: stock,
      });
  };

  return (
    <>
    
      <div className={`product-right ${stickyClass}`}>
        Detail Price
        <h2> {item.title} </h2>
        <h4>
          <del>
            {/* {symbol} */}
            $
              {Number(item.price)?.toFixed(2)?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </del>
          <span> {Number(item.oldPrice) - Number(item.price) > 0 && (
          <label className="product-label2 label-rounded">
            Save{" "}
            <b>
              {(
                (100 * (Number(item.oldPrice) - Number(item.price))) /
                item.oldPrice
              ).toFixed(1)}
              %
            </b>
          </label>
        )}</span>
        </h4>
        <h3>
          {/* {symbol} */}
          $
              {Number(item.oldPrice)?.toFixed(2)?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
        </h3>
        
        
        <div className="product-description border-product">

          <h6 className ='product-title size-text'>Condition <span style={{marginRight:'60%'}}>{item.condition}</span></h6>
          <h6 className ='product-title size-text'>Brand <span style={{marginRight:'60%'}}>{item.brand}</span></h6>
          {/* <h6 className ='product-title size-text'>Model <span>{item.model}</span></h6> */}
        
            {/* <div>
              <h6 className="product-title size-text">
                select size
                <span>
                  <Link
                    href='/'
                    data-toggle="modal"
                    data-target="#sizemodal"
                    onClick={toggle}
                  >
                    size chart
                  </Link >
                </span>
              </h6>
              <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Sheer Straight Kurta</ModalHeader>
                <ModalBody>
                  <Media src={"/assets/images/size-chart.jpg"} alt="size" className="img-fluid" />
                </ModalBody>
              </Modal>
              <div className="size-box">
                <ul>
                  {uniqueSize.map((data, i) => {
                    return (
                      <li key={i}>
                        {data}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div> */}
          
          <span className="instock-cls">{item.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
          <h6 className="product-title">quantity</h6>
          <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-left-minus"
                          // onClick={minusQty}
                          onClick={minusQty}

                          data-type="minus"
                          data-field=""
                        >
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        
                        
                        onChange={changeQty}
                        
                        required
                      
                        className="form-control input-number"
                      />
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-right-plus"
                          // onClick={() => plusQty(product)}
                          onClick={plusQty}
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
            onClick={addToCartHandler}
          >
            add to cart
          </button>
          <Link to={`/checkout`}>
            <button className="btn btn-solid">buy now</button>
          </Link>
        </div>
        <div className="border-product">
          <h6 className="product-title">product details</h6>
          {/* <p>{item.description}</p> */}
        </div>
        <div className=" container p-0">
          {storeMetadata.shipping.pickup?.isEnabled && (
            <div className="row">
              <div className="col-lg-6 col-sm-3 mb-0 ml-1">
                <IconBox
                  boxStyle="icon-box-sm mb-0  d-flex flex-row flex-start text-left "
                  iconClass="fa fa-clock-o "
                  style={{ fontSize: "2rem", marginRight: "1.3rem" ,marginTop:'0.6rem',color:'#FF4C3B'}}
                  // <div class='text-primary text-sm'>${
                  //   product.storeLocation
                  //     ? `${product.storeLocation.address}, ${product.storeLocation.state}, ${product.storeLocation.zipCode}`
                  //     : `${contact.address}, ${contact.city}, ${contact.state}  ${contact.zipCode}`
                  // }</div>
                  // title="Quisque a lectus"
                  text={`<span><strong>Pickup:</strong>${
                    item.isDefaultShippingEnabled || item.isPickup
                      ? `<span class='text-black-100'> Available at our main store location.</span>`
                      : "<span class='text-black-100'> Not available for this item</span>"
                  }</span>`}
                />
              </div>
            </div>
          )}

          {storeMetadata.shipping.delivery?.isEnabled && (
            <div className="row ">
              <div className="col-lg-6 col-sm-3 mb-0">
                <IconBox
                  boxStyle="icon-box-sm mb-0 d-flex flex-row flex-start text-left"
                  iconClass="fa fa-truck  "
                  style={{ fontSize: "2rem", marginRight: "1.3rem",marginTop:'1.5rem',color:'#FF4C3B' }}
                  // title="Quisque a lectus"

                  text={`<span><strong>Local Delivery:</strong><span class='text-black'>  ${
                    item.isDefaultShippingEnabled || item.isDeliverable
                      ? " Up to 20 miles with a fee."
                      : " Not available for this item."
                  }</span><div class='text-primary text-sm'>See delivery related questions faqs <a class="text-black" href="/faqs">link</a>. </div></span>`}
                />
              </div>
            </div>
          )}

          {storeMetadata.shipping.shipping?.isEnabled && (
            <div className="row">
              <div className="col-lg-6 col-sm-3 mb-2">
                <IconBox
                  boxStyle="icon-box-sm mt-4 d-flex flex-row flex-start text-left"
                  iconClass="fa fa-shopping-bag "
                  style={{ fontSize: "2rem", marginRight: "1.3rem" ,marginTop:'1.5rem',color:'#FF4C3B'}}
                  // title="Quisque a lectus"
                  text={`<span><strong>Shipping :</strong><span class='text-black'>${
                    item.isDefaultShippingEnabled || item.isShippable
                      ? " We ship using USPS and UPS (2-5 days)"
                      : " Not available for this item."
                  }</span></span>`}
                />
              </div>
            </div>
          )}
        </div>
       
        <div className="border-product">
       
          <h6 className="product-title">share it</h6>
          <div className="product-icon">
            <MasterSocial location={location} item={item} storeMetadata={storeMetadata} />
          </div>
        </div>
        <div className="border-product">
          <h6 className="product-title">Time Reminder</h6>
          <CountdownComponent />
        </div>
      </div>
    </>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
  incrementQty: (product) => dispatch(incrementQty(product)),
  decrementQty: (product) => dispatch(decrementQty(product)),
});

export default connect(null, mapDispatchToProps)(DetailsWithPrice);
