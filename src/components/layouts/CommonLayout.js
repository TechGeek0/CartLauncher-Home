// import React from "react";
// import HeaderThree from "../headers/header-three";
// // import Breadcrubs from "../common/widgets/breadcrubs";
// import Helmet from "react-helmet";
// import MasterFooter from "../footers/common/MasterFooter";
// import { graphql,useStaticQuery } from "gatsby";
// import store from '../../store/index'
// import { Provider } from 'react-redux';
// import { ToastContainer } from "react-toastify";
// import TapTop from '../common/widgets/Tap-Top.js'

// const CommonLayout = ({ children}) => {
//   const data = useStaticQuery(graphql`
//   {
//     metadata {
//       description
//     }
//     contact {
//       address
//       city
//       id
//       state
//       address
//       email
//       phone
//     }
//     storeLocations {
//       address
//       contactNo
//       name
//       state
//       zipCode
//     }
//     allCategories {
//       nodes {
//         name
//         subCategories {
//           name
//         }
//       }
//     }
//     allPages {
//       nodes {
//         title
//         slug
//         id
//         content
//         location {
//           header
//           footer
//           sidebar
//         }
//       }
//     }
//     allCategories {
//       nodes {
//         name
//         itemCount
//         thumbnail {
//           childImageSharp {
//             fixed {
//               src
//             }
//           }
//         }
//       }
//     }
//     sliderImages {
//       id
//     }
//     allSliderImages {
//       nodes {
//         url {
//           childImageSharp {
//             fluid(quality: 100) {
//               src
//             }
//           }
//         }
//       }
//     }
//     allProducts {
//       nodes {
//         _id
//         condition
//         description
//         oldPrice
//         price
//         quantity
//         title
//         isFeatured
//         isPickup
//         isShippable
//         isDeliverable
//         isDefaultShippingEnabled
//         images {
//           childImageSharp {
//             fluid(quality: 100, maxWidth: 270, maxHeight: 270) {
//               src
//             }
//           }
//         }
//         category {
//           _id
//           name
//         }
//       }
//     }
//     products {
//       images {
//         childImageSharp {
//           gatsbyImageData(height: 10, width: 10, sizes: "10")
//         }
//       }
//     }
//   }
  
//   `);

//   return (
//     <>
//     <Provider store={store}>
     
//       <Helmet>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
//       </Helmet>
//       <HeaderThree topClass="top-header" logoName="logo.png" />
//       <ToastContainer
//           position="bottom-center"
//           autoClose={3000}
//           hideProgressBar={true}
//           toastClassName="toast-custom-style"
//         />
//       {/* <Breadcrubs title={title} parent={parent} subTitle={subTitle} /> */}
//       <>{children}</>
//       <MasterFooter
//      data={data}
//         footerClass={`footer-light `}
//         footerLayOut={"light-layout upper-footer"}
//         footerSection={"small-section border-section border-top-0"}
//         belowSection={"section-b-space light-layout"}
//         newLatter={true}
//       />
//       <TapTop />
    
//       </Provider>
//     </>
    
//   );
// };

// export default CommonLayout;


