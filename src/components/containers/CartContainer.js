import React, {  Fragment } from "react";
import CartHeader from "../headers/common/cart-header";
import { Media } from "reactstrap";
// import { connect } from "react-redux";
import { Link } from "gatsby";
// import { getCartTotal } from "../../services/script";

const CartContainer = () => {

// let subtotal=
// cartlist.items.forEach((item, index) => {
                      

//   subtotal = item[index]?.price + subtotal;

// })

  return (
    
    <Fragment>
      
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">
        {/* {cartlist.items.length} */}
        </div>
        <Link to={`/cart`}>
          <div>
          <Media src={'/assets/images/icon/Add-to-cart.png'} className="img-fluid" alt="Cart Logo" />
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
        
        <ul className="show-div shopping-cart">
          {/* {cartlist.items.map((item, index) => (
            <CartHeader key={index} item={item}  />
          ))} */}
          
         
            <>
            <ul>
                <li>
                <div className="total">
                  <h5>
                    subtotal : 
                    <span>
                    {/* ${total} */}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link to={`/cart`}>
                    view cart
                  </Link>
                  <Link className="checkout" to={`/checkout`}>
                     Checkout
                  </Link>
                </div>
              </li>
              </ul>
              </>
              

           
          
        </ul>
       

      </li>
      
    </Fragment>
    
  );
};


export default CartContainer;
