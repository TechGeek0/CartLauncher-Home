// import React, { Fragment, useEffect } from "react";
// import {Link} from "gatsby";

// import { Media } from "reactstrap";
// import { connect } from "react-redux";
// import { removeFromCart,setCart } from "../../../reducers/cart";
// import slugify from 'slugify'
// import cart from "../../cart/cart";


// const CartHeader = ({ item, symbol,removeProductFromCart }) => {
//   // console.log(item,'header')
//   useEffect(() => {
//     try {
//       const serializedState = localStorage.getItem("state");

//       if (serializedState) {
//         const persistedState = JSON.parse(serializedState);
//         if (persistedState && persistedState.cartlist) {
//           setCart(persistedState.cartlist);
//         }
//       }
//     } catch (e) {
//       // console.log(e);
//     }
//   }, [cart]);

 


//   return (
//     item?.length != 0 ?(
//     <Fragment>
//       <ul>
//       <li>
//         <div className="media">
//         <Link to={`/products/${slugify(item.title.toLowerCase())}`}>
            
//               <Media alt={`${item.title}`} className="mr-3" src={`${item.images[0].childImageSharp.fluid.src}`} />
            
//           </Link>
//           <div className="media-body">
//             <Link to={"/product/" + item._id}>
//               <Link>
//                 {/* <h4>{item.title}</h4> */}
//               </Link>
//             </Link>

//             <h4>
//               <span>
//                 {item.quantity}X
//                  $ {""}{item.price.toLocaleString(undefined, {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })}
//               </span>
//             </h4>
//           </div>
//         </div>
//         <div className="close-circle">
//           <i
//             className="fa fa-times"
//             aria-hidden="true"
//             onClick={() => removeProductFromCart(item._id)}
//           ></i>
//         </div>
//       </li>
//       </ul>
//     </Fragment>
//     ):(

// <span> No Products in Cart</span>

//     )
//   );
// };
// function mapStateToProps(state) {
//   return {
//     cartlist: state.cartlist.items ? state.cartlist.items : [],
//   };
// }
// export const mapDispatchToProps = dispatch => {
//   return {
//     setCart: (value) => dispatch(setCart(value)),
//     removeProductFromCart: (_id) => dispatch(removeFromCart(_id)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CartHeader);
