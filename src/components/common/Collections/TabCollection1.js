import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
import ProductItem from "../../product-box/ProductBox1";
// import CartContext from "../../../helpers/cart/index";
import { Container, Row, Col } from "reactstrap";
// import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
// import PostLoader from "../PostLoader";
// import { CompareContext } from "../../../helpers/Compare/CompareContext";
// import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import Slider from "react-slick";
// import Products from '../../../../Products.json';



const TabContent = ({
//   product,
  // loading,
  // startIndex,
  // endIndex,
  cartClass,
 
  backImage,
  title,
  designClass,
  productSlider,
  activeTab
}) => {
  
  // console.log(activeTab)
  
  const product = [
    {
        id: 1,
        name: "Product 1",
        price: "100",
        image: "/assets/images/Product.jpg",
        description: "Product 1",
        quantity: 1,
        total: 100,
    
    },
    {
        id: 2,
        name: "Product 2",
        price: "200",
        image: "/assets/images/Product2.jpg",
        description: "Product 2",
        quantity: 1,
        total: 200,
    },
    {
        id: 3,
        name: "Product 3",
        price: "300",
        image: "/assets/images/Product3.jpg",
        description: "Product 3",
        quantity: 1,
        total: 300,
    },
    {
        id: 4,
        name: "Product 4",
        price: "400",
        image: "/assets/images/Product4.jpg",
        description: "Product 4",
        quantity: 1,
        total: 400,
    },
    
    
    
      ]
      

 
// var loading = false;
  return (
    <section className={designClass}>
      
          <Container>
            <Row>
              <Col>
              
              

            {activeTab === 'fashion' ? (
                  <Slider {...productSlider} className="product-m no-arrow">
                    {
                      product.map((product, i) => (
                        <div key={i}>
                          <ProductItem
                            product={product}
                            title={title}
                            // onAddToCart ={ addToCart}
                            // addWishlist={() =>
                            //   contextWishlist.addToWish(product)
                            // }
                            // addCart={() => context.addToCart(product, quantity)}
                            // addCompare={() => comapreList.addToCompare(product)}
                            cartClass={cartClass}
                            backImage={backImage}
                          />
                        </div>
                      ))}
                  </Slider>
                ) : (
                  <Slider {...productSlider} className="product-m no-arrow">
                  {
                    product.map((product, i) => (
                      <div key={i}>
                        <ProductItem
                          product={product}
                          title={title}
                          // onAddToCart ={ addToCart}
                          // addWishlist={() =>
                          //   contextWishlist.addToWish(product)
                          // }
                          // addCart={() => context.addToCart(product, quantity)}
                          // addCompare={() => comapreList.addToCompare(product)}
                          cartClass={cartClass}
                          backImage={backImage}
                        />
                      </div>
                    ))}
                </Slider>
                )}

                
                
              </Col>
            </Row>
          </Container>
        
      </section>
  );
};

const Specialproduct = ({
  data,
  type,
  fluid,
  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage,
  productSlider
}) => {
  const [activeTab, setActiveTab] = useState(type);
//   const FeaturedProducts = data.allProducts.nodes.filter(
//     (item) => item.isFeatured === true
//   )
  // const context = useContext(CartContext);
  // const wishListContext = useContext(WishlistContext);
  // const compareContext = useContext(CompareContext);
  // const curContext = useContext(CurrencyContext);
  // console.log(data)
  // const currency = curContext.state;
  // const quantity = context.quantity;

  // var { loading, data } = useQuery(GET_product, {
  //   variables: {
  //     type: activeTab,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });

  // console.log("data product 154",data);

  return (
    <div>
      <section className={designClass}>
        <Container fluid={fluid}>
          {noTitle ? (
            ""
          ) : (
            <div className={title}>
              <h4>{heading}</h4>
              {/* exclusive product */}
              <h2 className={inner}>special product</h2>
              {line ? (
                <div className="line"></div>
              ) : hrClass ? (
                <hr className={hrClass} />
              ) : (
                ""
              )}
            </div>
          )}

          <Tabs className="theme-tab">
            <TabList className="tabs tab-title">
              <Tab
                className={activeTab === type ? "active" : ""}
                onClick={() => setActiveTab(type)}
              >
                NEW ARRIVAL
              </Tab>
              <Tab
                className={activeTab === "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                FEATURED{" "}
              </Tab>
             
            </TabList>

            <TabPanel>
              <TabContent
                // product={data.allProducts}
                activeTab={activeTab}
                designClass={designClass}
                productSlider={productSlider}
                // loading={loading}
                startIndex={0}
                endIndex={8}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                // product={FeaturedProducts}
                activeTab={activeTab}
                productSlider={productSlider}
                // loading={loading}
                startIndex={0}
                endIndex={8}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
           
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default Specialproduct;
