// import React, { useState,useEffect } from "react";
// // import { useRouter } from "next/router";
// import {Link} from "gatsby";

// import {
//   Container,
//   Row,
//   Col,

//   Card,
//   CardBody,
//   Input,
//   NavItem,
//   NavLink,
//   TabContent,
//   Nav,
//   TabPane,
//   Modal,
//   // Form,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Button,
//   Label,
//   Media
// } from "reactstrap";



// import { connect } from "react-redux";
// import {
//   getIsAuthenticated,
//   getIsUploadingUser,
//   getUploadErrors,
//   getUploadStatus,
//   getUser,
//   logout,
//   updateUser,
//   uploadInit,
// } from "../../../../reducers/user";
// import { axiosIns } from "../../../../apihelper";






// const RecentOrder = ({ id, productDetails, status }) => {

//   return (
//     <tr>
      
//       <th scope="row">{id}</th>
     

//       {productDetails.map((product) => (
//         <td >{product.productId.title}</td>
//       ))}
      
      
    
//       <td>{status}</td>
//     </tr>
//   );
// };

// const AllOrder = (props) => {
//   const [orderModal, setOrderModal] = useState(false);
// const toggleOpenModal = () => setOrderModal(!orderModal);

//   const customStyles = {
//     content: {
//       top: "30%",
//       transform: "translateY(-50%)",
//       maxHeight: "400px",
//     },
//     overlay: {
//       backgroundColor: "rgba(51,51,51,0.6)",
//       zIndex: "10000",
//     },
//   };
//   return (
//     <>
    
    
    

//     <tr>
//       <th scope="row">{new Date(props.order.createdAt).toLocaleDateString()}</th>
      
//        <td>{props.order.checkoutID}</td> 
//       <td>{props.order.customer.firstName}</td>
//        <td>{props.order.status}</td> 
//        <td>{props.order.subtotal}</td>
//         <td><button className="btn btn-solid" onClick={toggleOpenModal}>
//         <span>Items</span>
//         <i className="icon-long-arrow-right"></i>
//       </button></td>

      
//     </tr>
//     <div>
      

//       <Modal
//         isOpen={orderModal}
//         style={customStyles}
//         className="container quickView-container"
//         onRequestClose={toggleOpenModal}
//         center
//       >
//         <div className="modal-content" style={{ maxHeight: "700px" }}>
//           <div className="modal-body mt-4 p-2">
//             <div className="row ">
//               <div className="col-12">
//                 <table className="table table-sm table-striped">
//                   <thead>
//                     <tr>
//                       <th scope="col">Product Title</th>
//                       <th scope="col">Product Quantity</th>
//                       <th scope="col">Product Price</th>
//                       <th>Amount</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {props.order.cart &&
//                       props.order.cart.map((item) => (
//                         <tr key={item.productId}>
//                           <td >
//                             {" "}
//                             {item.productId.title.slice(0, 15)}
//                           </td>
//                           <td >{item.quantity}</td>
//                           <td >{Number(item.price).toFixed(2)}</td>
//                           <td>{Number(item.quantity * item.price).toFixed(2)}</td>
//                         </tr>
//                       ))}
//                   </tbody>

//                   <tfoot>
//                     <tr >
//                       {" "}
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td><b>Subtotal</b>: $ {Number(props.order.subtotal).toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td><b>Tax</b>: $ {Number(props.order.tax).toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td><b>Shipping</b>: $ {Number(props.order.shipping).toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td>
//                         <b>Total</b>: {"$"}
//                         {Number(props.order.tax + props.order.shipping + props.order.subtotal).toFixed(2)}
//                       </td>
//                     </tr>
//                   </tfoot>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="btn btn-solid" style={{'width':'110px','padding':'10px','marginBottom':'10px','marginLeft':'5px'}} onClick={toggleOpenModal}>
//         <span>Close</span>
//         </button>
//       </Modal>
      

//     </div>
//     </>
    
//   );
// }





// const Dashboard = ({  loggedInUser,
//     // isAuthenticated,
//     logout,
//     updateUser,
//     isUploading,
//     uploadErrors,
//     uploadStatus,
//     uploadInit,}) => {
// //   const router = useRouter();
// const [loading, setLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState("1");
//   const [modal, setModal] = useState(false);
//   const [modal2, setModal2] = useState(false);

//   const [firstName, setFirstName] = useState(loggedInUser.firstName);
//   const [lastName, setLastName] = useState(loggedInUser.lastName);
//   const [email, setEmail] = useState(loggedInUser.email);
//   const [password, setPassword] = useState("");
//   const [currentPassword, setcurrentPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState(loggedInUser.address?.phone);
//   const [address, setAddress] = useState(loggedInUser.address?.address);
//   const [city, setCity] = useState(loggedInUser.address?.city);
//   const [state, setState] = useState(loggedInUser.address?.state);
//   const [zip, setZip] = useState(loggedInUser.address?.zip);
//   const[order,setOrders] =useState([]);
 
// const toggle = () => {
//      setModal(!modal);
//     uploadInit();
// }
// const toggle2 = () => {
//     setModal2(!modal2);
   
// }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // this.validator.allValid();
//     setLoading(true);
//     let isPasswordChanged = false;
//     if (password) {
//       isPasswordChanged = true;
//     }
//     const data = {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//       currentPassword,
//       isPasswordChanged,
//       phone,
//       address: {
//               phone,
//               address,
//               city,
//               state,
//               zip,
//             },
//     };
//     updateUser(data);
//     setLoading(false);
//   };
//   // const updateAddress = (e) => {
//   //   e.preventDefault();
//   //   // this.validator.allValid();
//   //   setLoading(true);

//   //   const data = {
//   //     address: {
//   //       phone,
//   //       address,
//   //       city,
//   //       state,
//   //       zip,
//   //     },
//   //   };
//   //   updateUser(data);
//   //   setLoading(false);
//   // };

//   const ProfileData = [
//     { title: "Name", detail: `${loggedInUser.firstName}` },
//     { title: "Email Address", detail: `${loggedInUser.email}` },
//     { title: "Country / Region", detail: "Downers Grove, IL" },
    
//     { title: "Category", detail: "Clothing" },
//     { title: "Street Address", detail: `${loggedInUser?.address?.address}` },
//     { title: "City/State", detail: `${loggedInUser?.address?.city}` },
//     { title: "Zip", detail: `${loggedInUser?.address?.zip}` },
//   ];
//   const ProfileDetail = ({ title, detail }) => {
//     return (
//       <ul>
//       <li>
//         <div className="details">
//           <div className="left">
//             <h6>{title}</h6>
//           </div>
//           <div className="right">
//             <h6>{detail}</h6>
//           </div>
//         </div>
//       </li>
//       </ul>
//     );
//   };
 
//   useEffect(() => {
//     setLoading(true);
//     axiosIns.defaults.headers.common["Authorization"] = `Bearer ${loggedInUser.token}`;
//     axiosIns.get("/marketplace/orders").then((res) => {
//       setOrders(res.data);
//     });
//     setLoading(false);
    
//   }, [loggedInUser]);

  
 
 

//   return (
   
//     <section className="dashboard-section section-b-space">
      

//       <Container>

//         <Row>
//           <Col lg="3">
//             <div className="dashboard-sidebar">
//               <div className="profile-top">
//                 <div className="profile-image">
//                   <Media src={"/assets/images/logo.png"} alt="" className="img-fluid" />
//                 </div>
//                 <div className="profile-detail">
//                   <h5>{`${process.env.GATSBY_STORE_NAME}`}</h5>
                  
//                   <h6>{loggedInUser.email}</h6>
//                 </div>
//               </div>
//               <div className="faq-tab">
//                 <Nav tabs className="border-tab-primary">
//                   <NavItem className="nav nav-tabs" id="myTab" role="tablist">
//                     <NavLink
//                       className={activeTab === "1" ? "active" : ""}
//                       onClick={() => setActiveTab("1")}
//                     >
//                       Dashboard
//                     </NavLink>
//                   </NavItem>
                 
//                   <NavItem className="nav nav-tabs" id="myTab" role="tablist">
//                     <NavLink
//                       className={activeTab === "3" ? "active" : ""}
//                       onClick={() => setActiveTab("3")}
//                     >
//                       Order
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="nav nav-tabs" id="myTab" role="tablist">
//                     <NavLink
//                       className={activeTab === "4" ? "active" : ""}
//                       onClick={() => setActiveTab("4")}
//                     >
//                       Profile
//                     </NavLink>
//                   </NavItem>
//                   {/* <NavItem className="nav nav-tabs" id="myTab" role="tablist">
//                     <NavLink
//                       className={activeTab === "5" ? "active" : ""}
//                       onClick={() => setActiveTab("5")}
//                     >
//                       Settings
//                     </NavLink>
//                   </NavItem> */}
//                   <NavItem className="nav nav-tabs" id="myTab" role="tablist">
//                     <NavLink
//                       className={activeTab === "6" ? "active" : ""}
//                       onClick={toggle2}
//                     >
//                       Logout
//                     </NavLink>
//                   </NavItem>
//                 </Nav>
//               </div>
//             </div>
//           </Col>
//           <Col lg="9">
//             <div className="faq-content">
//               <TabContent activeTab={activeTab}>
//                 <TabPane tabId="1">
//                   <div className="counter-section">
//                     <Row>
//                       {/* {order.map((data, i) => {
//                         return (
//                           <Summary
//                             key={i}
//                             img={data.img}
//                             title={data.title}
//                             desc={data.desc}
//                           />
//                         );
//                       })} */}
//                     </Row>
//                   </div>
                  
//                   <Row>
//                     {/* <Col lg="6">
//                       <Card className="dashboard-table">
//                         <CardBody>
//                           <h3>trending products</h3>
//                           <table className="table mb-0 table-responsive-sm">
//                             <thead>
//                               <tr>
//                                 <th scope="col">image</th>
//                                 <th scope="col">product name</th>
//                                 <th scope="col">price</th>
//                                 <th scope="col">sales</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {ProductData.slice(0, 3).map((data, i) => {
//                                 return (
//                                   <TrendingProduct
//                                     key={i}
//                                     img={data.img}
//                                     productName={data.productName}
//                                     price={data.price}
//                                     sales={data.sales}
//                                   />
//                                 );
//                               })}
//                             </tbody>
//                           </table>
//                         </CardBody>
//                       </Card>
//                     </Col> */}
//                     <Col lg="12">
//                       <Card className="dashboard-table">
//                         <CardBody>
//                           <h3>recent orders</h3>
//                           <table className="table mb-0">
//                             <thead>
//                               <tr>
//                               <th scope="col">Date</th>
//                                 <th scope="col">Order #</th>
//                                 <th scope="col">Customer Name</th>
//                                 <th scope="col">Status</th>
//                                 <th scope="col">Total</th>
//                                 <th scope="col">Order Details</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {order.map((data, i) => {
                                
//                                 return (
//                                   <AllOrder
//                                     order={data}
//                                     kwy={i}
                                    
//                                   />
//                                 );
//                               })}
//                             </tbody>
//                           </table>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </TabPane>
               
//                 <TabPane tabId="3">
//                   <Row>
//                     <Col sm="12">
//                       <Card className="dashboard-table mt-0">
//                         <CardBody>
//                           <div className="top-sec">
//                             <h3>orders</h3>
                            
//                           </div>
//                           <table className="table table-responsive-sm mb-0">
//                             <thead>
//                               <tr>
//                                 <th scope="col">Date</th>
//                                 <th scope="col">Order #</th>
//                                 <th scope="col">Customer Name</th>
//                                 <th scope="col">Status</th>
//                                 <th scope="col">Total</th>
//                                 <th scope="col">Order Details</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {order?.map((data, i) => {
//                                 return (
//                                   <AllOrder
//                                     order={data}
                                    
//                                   />
//                                 );
//                               })}
//                             </tbody>
//                           </table>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </TabPane>
//                 <TabPane tabId="4">
//                   <Row>
//                     <Col sm="12">
//                       <Card className="mt-0">
//                         <CardBody>
//                           <div className="dashboard-box">
//                             <div className="dashboard-title">
//                               <h4>profile</h4>
//                               <Button 
//                               size="small"
//                               // style={{display: "none"}}
//                               className=" btn ml-2 float-right"
//                               onClick={toggle
//                                         }>
//                                             Edit
//                                             </Button>

                              
                                
//                             </div>
//                             <Modal isOpen={modal} toggle={toggle} centered>
//                 <ModalHeader toggle={toggle}>Edit Profile</ModalHeader>
//                 <ModalBody className="p-4">
//                 <form action="#">
//                                           {!isUploading &&
//                                             uploadStatus === "success" && (
//                                               <span className="alert alert-success">
//                                                 Updated Successfully
//                                               </span>
//                                             )}
//                                           {typeof uploadErrors?.errors ===
//                                           "string" ? (
//                                             uploadErrors?.errors
//                                           ) : (
//                                             <ul>
//                                               {uploadStatus === "failed" &&
//                                                uploadErrors?.errors &&  uploadErrors.errors?.map(
//                                                   (err, i) => (
//                                                     <li
//                                                       className="text-danger"
//                                                       key={i}
//                                                       style={{
//                                                         display: "list-item",
//                                                       }}
//                                                     >
//                                                       {err.msg}
//                                                     </li>
//                                                   )
//                                                 )}
//                                             </ul>
//                                           )}
//                                            <div className="row">
//                                   <div className="col-sm-6">
//                                     <label htmlFor="firstName">
//                                       First Name *
//                                     </label>
//                                     <input
//                                       type="text"
//                                       id="firstName"
//                                       name="firstName"
//                                       value={loggedInUser.firstName}
//                                       onChange={(e) =>
//                                         setFirstName(e.target.value)
//                                       }
//                                       className="form-control"
//                                       required
//                                     />
//                                   </div>

//                                   <div className="col-sm-6">
//                                     <label htmlFor="lastName">
//                                       Last Name *
//                                     </label>
//                                     <input
//                                       name="lastName"
//                                       id="lastName"
//                                       type="text"
//                                       value={loggedInUser.lastName}
//                                       onChange={(e) =>
//                                         setLastName(e.target.value)
//                                       }
//                                       className="form-control"
//                                       required
//                                     />
//                                   </div>
//                                 </div>
//                                           <div className="row">
//                                             <div className="col-sm-6">
//                                               <label htmlFor="address">
//                                                 Address *
//                                               </label>
//                                               <input
//                                                 type="text"
//                                                 id="address"
//                                                 name="address"
//                                                 value={address}
//                                                 onChange={(e) =>
//                                                   setAddress(e.target.value)
//                                                 }
//                                                 className="form-control"
//                                                 required
//                                               />
//                                             </div>

//                                             <div className="col-sm-6">
//                                               <label htmlFor="phone">
//                                                 Phone *
//                                               </label>
//                                               <input
//                                                 name="phone"
//                                                 id="phone"
//                                                 type="text"
//                                                 value={phone}
//                                                 onChange={(e) =>
//                                                   setPhone(e.target.value)
//                                                 }
//                                                 className="form-control"
//                                                 required
//                                               />
//                                             </div>
//                                           </div>

//                                           {/* <label>Display Name *</label>
//                                                         <input type="text" className="form-control" required />
//                                                         <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small> */}

//                                           <label htmlFor="city">City *</label>
//                                           <input
//                                             id="city"
//                                             type="text"
//                                             value={city}
//                                             onChange={(e) =>
//                                               setCity(e.target.value)
//                                             }
//                                             className="form-control"
//                                             required
//                                           />

//                                           <label htmlFor="state">state *</label>
//                                           <input
//                                             id="state"
//                                             type="text"
//                                             value={state}
//                                             onChange={(e) =>
//                                               setState(e.target.value)
//                                             }
//                                             className="form-control"
//                                             required
//                                           />
//                                           <label htmlFor="zip">zip *</label>
//                                           <input
//                                             id="zip"
//                                             type="text"
//                                             value={zip}
//                                             onChange={(e) =>
//                                               setZip(e.target.value)
//                                             }
//                                             className="form-control"
//                                             required
//                                           />

                                         
//                                         </form>



//                 </ModalBody>
//                 <ModalFooter>
                 
//                   <Button
//                   type="submit"
//                     className="btn-solid btn-custom"
//                     color="secondary"
//                     onClick={handleSubmit}
//                   >
//                     Save Changes
//                   </Button>
//                 </ModalFooter>
//               </Modal>
//                             <div className="dashboard-detail">
//                               <ul>
//                                 {ProfileData.map((data, i) => {
//                                   return (
//                                     <ProfileDetail
//                                       key={i}
//                                       title={data.title}
//                                       detail={data.detail}
//                                     />
//                                   );
//                                 })}
//                               </ul>
//                             </div>
//                           </div>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </TabPane>
//                 {/* <TabPane tabId="5">
//                   <Row>
//                     <Col sm="12">
//                       <Card className="mt-0">
//                         <CardBody>
//                           <div className="dashboard-box">
//                             <div className="dashboard-title">
//                               <h4>settings</h4>
//                             </div>
//                             <div className="dashboard-detail">
//                               <div className="account-setting">
//                                 <h5>Notifications</h5>
//                                 <Row>
//                                   <Col>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios"
//                                         id="exampleRadios1"
//                                         value="option1"
//                                         defaultChecked
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios1"
//                                       >
//                                         Allow Desktop Notifications
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios"
//                                         id="exampleRadios2"
//                                         value="option2"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios2"
//                                       >
//                                         Enable Notifications
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios"
//                                         id="exampleRadios3"
//                                         value="option3"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios3"
//                                       >
//                                         Get notification for my own activity
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios"
//                                         id="exampleRadios4"
//                                         value="option4"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios4"
//                                       >
//                                         DND
//                                       </Label>
//                                     </div>
//                                   </Col>
//                                 </Row>
//                               </div>
//                               <div className="account-setting">
//                                 <h5>deactivate account</h5>
//                                 <Row>
//                                   <Col>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios1"
//                                         id="exampleRadios4"
//                                         value="option4"
//                                         defaultChecked
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios4"
//                                       >
//                                         I have a privacy concern
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios1"
//                                         id="exampleRadios5"
//                                         value="option5"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios5"
//                                       >
//                                         This is temporary
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios1"
//                                         id="exampleRadios6"
//                                         value="option6"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios6"
//                                       >
//                                         other
//                                       </Label>
//                                     </div>
//                                     <button
//                                       type="button"
//                                       className="btn btn-solid btn-xs"
//                                     >
//                                       Deactivate Account
//                                     </button>
//                                   </Col>
//                                 </Row>
//                               </div>
//                               <div className="account-setting">
//                                 <h5>Delete account</h5>
//                                 <Row>
//                                   <Col>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios3"
//                                         id="exampleRadios7"
//                                         value="option7"
//                                         defaultChecked
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios7"
//                                       >
//                                         No longer usable
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios3"
//                                         id="exampleRadios8"
//                                         value="option8"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios8"
//                                       >
//                                         Want to switch on other account
//                                       </Label>
//                                     </div>
//                                     <div className="form-check">
//                                       <Input
//                                         className="radio_animated form-check-input"
//                                         type="radio"
//                                         name="exampleRadios3"
//                                         id="exampleRadios9"
//                                         value="option9"
//                                       />
//                                       <Label
//                                         className="form-check-label"
//                                         for="exampleRadios9"
//                                       >
//                                         other
//                                       </Label>
//                                     </div>
//                                     <button
//                                       type="button"
//                                       className="btn btn-solid btn-xs"
//                                     >
//                                       Delete Account
//                                     </button>
//                                   </Col>
//                                 </Row>
//                               </div>
//                             </div>
//                           </div>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </TabPane> */}
//               </TabContent>
//               <Modal isOpen={modal2} toggle={toggle2} centered>
//                 <ModalHeader >Logging Out</ModalHeader>
//                 <ModalBody className="p-4">Do you want to logout?</ModalBody>
//                 <ModalFooter>
//                   <Link href={"/"}>
//                     <button className="btn-solid btn-custom" color="secondary" onClick={()=>logout()}>
//                       Yes
//                     </button >
//                   </Link>
//                   <Button
//                     className="btn-solid btn-custom"
//                     color="secondary"
//                     // onClick={toggle2}
//                   >
//                     No
//                   </Button>
//                 </ModalFooter>
//               </Modal>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
   
//   );
// };

// const mapStateToProps = (state) => ({
//     loggedInUser: getUser(state),
//     isAuthenticated: getIsAuthenticated(state),
//     isUploading: getIsUploadingUser(state),
//     uploadStatus: getUploadStatus(state),
//     uploadErrors: getUploadErrors(state),
//   });
//   const mapDispatchToProps = (dispatch) => ({
//     logout: () => dispatch(logout()),
//     updateUser: (user) => dispatch(updateUser(user)),
//     uploadInit: () => dispatch(uploadInit()),
//   });
//   export default React.memo(
//     connect(mapStateToProps, mapDispatchToProps)(Dashboard)
//   );
