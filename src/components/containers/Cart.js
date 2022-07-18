import React, { useContext, Fragment, useState } from "react";
import {Link} from "gatsby";
import CartContext from "../../helpers/cart";
import { Media } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";

const CartComponent = ({ icon, layout }) => {
  
  const context = useContext(CartContext);
  const currContext = useContext(CurrencyContext);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const [openSide, setOpenSide] = useState(false);

  return (
    <Fragment>
      {
        <ul>        <li
          className="onhover-div mobile-cart"
          onClick={() => setOpenSide(true)}
        >
          <div className="cart-qty-cls">{cartList.length}</div>
          <div href={null}>
            <Media
              alt="cart"
              src={icon.src}
              className="img-fluid blur-up lazyload"
            />
            <i className="fa fa-shopping-cart"></i>
          </div>
        </li>
        </ul>
      }

      <div
        id="cart_side"
        className={`add_to_cart ${layout} ${openSide ? "open-side" : ""} `}
      >
        <Link to={null} className="overlay"></Link >
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my cart</h3>
            <div className="close-cart" onClick={() => setOpenSide(false)}>
              <Link to={null}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </Link >
            </div>
          </div>
          <div className="cart_media">
            <ul className="cart_product">
              {cartList.length > 0 &&
                cartList.map((item, index) => (
                  <li key={`cart-popup-${index}`}>
                    <div className="media">
                      <Link to={null}>
                        <Media
                          alt=""
                          className="mr-3"
                          src={`${item.images[0].src}`}
                        />
                      </Link >
                      <div className="media-body">
                        <Link to={null}>
                          <h4>{item.title}</h4>
                        </Link >
                        <h4>
                          <span>
                            {item.qty} x {symbol} {item.price}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="close-circle">
                      <Link to="#" onClick={() => removeFromCart(item)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </Link >
                    </div>
                  </li>
                ))}
            </ul>
            <ul className="cart_total">
              <li>
                <div className="total">
                  <h5>
                    subtotal : <span>${total}</span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons">
                  <Link href="/page/account/cart">
                    <button className="btn btn-solid btn-xs view-cart">View Cart</button >
                  </Link>
                  <Link href="/page/account/checkout">
                    <button className="btn btn-solid btn-xs checkout">checkout</button >
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartComponent;
