// import React from "react";

// import { Container, Row, Col, Media } from "reactstrap";
// import { connect } from "react-redux";
// import { addToCart, removeFromCart ,
//   incrementQty,
//   decrementQty, } from "../../reducers/cart";
// import slugify from "slugify";
// import { Link } from "gatsby";
// import {getCartTotal} from '../../services/script.js'

// const CartPage = ({total,removeFromCart,cartItems,incrementQty,decrementQty}) => {

//   return (
    
//     <div>
//       {cartItems && cartItems.items.length > 0 ? (
       
//         <section className="cart-section section-b-space">
//           <Container>
//             <Row>
//               <Col sm="12">
//                 <table className="table cart-table table-responsive-xs">
//                   <thead>
//                     <tr className="table-head">
//                       <th scope="col">image</th>
//                       <th scope="col">product name</th>
//                       <th scope="col">price</th>
//                       <th scope="col">quantity</th>
//                       <th scope="col">action</th>
//                       <th scope="col">total</th>
//                     </tr>
//                   </thead>
//                   {cartItems.items.map((item, index) => {
//                      return ( 
//                       <tbody >
//                         <tr>
//                           <td>
//                             <Link to={`/products/${slugify(item.title.toLowerCase())}`}>
                              
//                                 <Media
//                                   src={
//                                     item.images
//                                       ? item.images[0].childImageSharp.fluid.src
//                                       : item.images[1].childImageSharp.fluid.src
//                                   }
//                                   alt={`${item.title}`}
//                                 />
                              
//                             </Link>
//                           </td>
//                           <td>
//                           <Link to={`/products/${slugify(item.title.toLowerCase())}`}>
//                                 {item.title}
//                              </Link>
//                             <div className="mobile-cart-content row">
//                               <div className="col-xs-3">
//                               <div className="qty-box">
//                               <div className="input-group">
//                                 <span className="input-group-prepend">
//                                 <button
//                                   onClick={() => decrementQty(item._id)}
//                                   style={{ minWidth: "26px" }}
//                                   className="btn btn-decrement btn-spinner"
//                                   type="button"
//                                   disabled={item.quantity === 1}
//                                 >
//                                   <i className="fa fa-angle-left"></i>
//                                 </button>
//                               </span>
//                               <input
//                         type="text"
//                         name="quantity"
//                         value={item.quantity}
                        
                        
//                         // onChange={changeQty}
                        
//                         required
                      
//                         className="form-control input-number"
//                       />
//                                 <span className="input-group-append">
//                                 <button
//                                   onClick={() => incrementQty(item._id)}
//                                   style={{ minWidth: "26px" }}
//                                   className="btn btn-increment btn-spinner"
//                                   type="button"
//                                   disabled={item.quantity > item.stock}
//                                 >
//                                   <i className="fa fa-angle-right"></i>
//                                 </button>
//                               </span>
//                               </div>
//                             </div>
//                                 {/* {item.quantity === 0 ? "out of Stock" : ""} */}
//                               </div>
//                               <div className="col-xs-3">
//                                 <h2 className="td-color">
//                                   {/* {symbol} */}
//                                   {item.price }
//                                 </h2>
//                               </div>
//                               <div className="col-xs-3">
//                                 <h2 className="td-color">
//                                 <i
//                               className="fa fa-times"
//                               onClick={() => removeFromCart(item._id)}
//                             ></i>
//                                 </h2>
//                               </div>
//                             </div>
//                           </td>
//                           <td>
//                             <h2>
//                               {/* {symbol} */}
//                               {item.price }
//                             </h2>
//                           </td>
//                           <td>
//                             <div className="qty-box">
//                               <div className="input-group">
//                                 <span className="input-group-prepend">
//                                 <button
//                                   onClick={() => decrementQty(item._id)}
//                                   style={{ minWidth: "26px" }}
//                                   className="btn btn-decrement btn-spinner"
//                                   type="button"
//                                   disabled={item.quantity === 1}
//                                 >
//                                   <i className="fa fa-angle-left"></i>
//                                 </button>
//                               </span>
//                               <input
//                         type="text"
//                         name="quantity"
//                         value={item.quantity}
                        
                        
//                         // onChange={changeQty}
                        
//                         required
                      
//                         className="form-control input-number"
//                       />
//                                 <span className="input-group-append">
//                                 <button
//                                   onClick={() => incrementQty(item._id)}
//                                   style={{ minWidth: "26px" }}
//                                   className="btn btn-increment btn-spinner"
//                                   type="button"
//                                   disabled={item.quantity > item.stock}
//                                 >
//                                   <i className="fa fa-angle-right"></i>
//                                 </button>
//                               </span>
//                               </div>
//                             </div>
//                             { item.quantity > item.stock ? "Out of Stock !" : ""}
//                           </td>
//                           <td>
//                             <i
//                               className="fa fa-times"
//                               onClick={() => removeFromCart(item._id)}
//                             ></i>
//                           </td>
//                           <td>
//                             <h2 className="td-color">
//                               {/* {symbol} */}
//                               {item.price * item.quantity}
//                             </h2>
//                           </td>
//                         </tr>
//                       </tbody>
//                      ); 
//                     })}
//                 </table>
//                 <table className="table cart-table table-responsive-md">
//                   <tfoot>
//                     <tr>
//                       <td>total price :</td>
//                       <td>
//                         <h2>
//                           $ {total}
//                         </h2>
//                       </td>
//                     </tr>
//                   </tfoot>
//                 </table>
//               </Col>
//             </Row>
//             <Row className="cart-buttons">
//               <Col xs="6">
//                 <Link to={`/allcollection`}>
//                   <button className="btn btn-solid">continue shopping</button>
//                 </Link>
//               </Col>
//               <Col xs="6">
//                 <Link to={`/checkout`}>
//                   <button className="btn btn-solid">check out</button>
//                 </Link>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       ) : (
//         <section className="cart-section section-b-space">
//           <Container>
//             <Row>
//               <Col sm="12">
//                 <div>
//                   <div className="col-sm-12 empty-cart-cls text-center">
//                     <Media
//                       src={"/assets/images/icon-empty-cart.png"}
//                       className="img-fluid mb-4 mx-auto"
//                       alt=""
//                     />
//                     <h3>
//                       <strong>Your Cart is Empty</strong>
//                     </h3>
//                     <h4>Explore more shortlist some items.</h4>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         )}
      
//     </div>
//     );
// };




// function mapStateToProps(state) {
//   return {
//     cartItems: state.cartlist,
//     total: getCartTotal(state.cartlist.items),
    
//   };
// }
// export const mapDispatchToProps = (dispatch) => ({
//     removeFromCart: (_id) => dispatch(removeFromCart(_id)),
//     addToCart: (item) => dispatch(addToCart(item)),
//     incrementQty: (_id) => dispatch(incrementQty(_id)),
//     decrementQty: (_id) => dispatch(decrementQty(_id)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


