import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ProductItem from "../../product-box/ProductBox1";
import CartContext from "../../../helpers/cart/index";
import { Container, Row, Col } from "reactstrap";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";

const product = [
  {
      id: 1,
      name: "Product 1",
      price: "100",
      image: "assets/images/Product.jpg",
      description: "Product 1",
      quantity: 1,
      total: 100,
  
  },
  {
      id: 2,
      name: "Product 2",
      price: "200",
      image: "assets/images/Product2.jpg",
      description: "Product 2",
      quantity: 1,
      total: 200,
  },
  {
      id: 3,
      name: "Product 3",
      price: "300",
      image: "assets/images/Product3.jpg",
      description: "Product 3",
      quantity: 1,
      total: 300,
  },
  {
      id: 4,
      name: "Product 4",
      price: "400",
      image: "assets/images/Product4.jpg",
      description: "Product 4",
      quantity: 1,
      total: 400,
  },
  
  
  
    ]
const TabContent = ({  cartClass, startIndex, endIndex }) => {
  // const context = useContext(CartContext);
  // const wishListContext = useContext(WishlistContext);
  // const compareContext = useContext(CompareContext);
  // const quantity = context.quantity;
const [loading,setIsLoading] = useState(false);
  return (
    <>
      <Row className="no-slider">
        {product.length === 0 ||
        loading ? (
         
          product.length === 0 ? (
            <Col xs="12">
              <div>
                <div className="col-sm-12 empty-cart-cls text-center">
                  <img
                    src={`/static/images/empty-search.jpg`}
                    className="img-fluid mb-4 mx-auto"
                    alt=""
                  />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Explore more shortlist some items.</h4>
                </div>
              </div>
            </Col>
          ) : (
            <div className="row mx-0 margin-default">
              <div className="col-xl-3 col-lg-4 col-6">
                <PostLoader />
              </div>
              <div className="col-xl-3 col-lg-4 col-6">
                <PostLoader />
              </div>
              <div className="col-xl-3 col-lg-4 col-6">
                <PostLoader />
              </div>
              <div className="col-xl-3 col-lg-4 col-6">
                <PostLoader />
              </div>
            </div>
          )
        ) : (
          
          product
            .map((product, i) => (
              <ProductItem
                product={product}
                key={i}
                // addCompare={() => compareContext.addToCompare(product)}
                // addCart={() => context.addToCart(product, quantity)}
                // addWishlist={() => wishListContext.addToWish(product)}
                cartClass={cartClass}
              />
            ))
        )}
      </Row>
    </>
  );
};

const SpecialProducts = ({ type, designClass, cartClass, noTitle }) => {
  const [activeTab, setActiveTab] = useState(type);
  // const context = useContext(CartContext);
  // const wishListContext = useContext(WishlistContext);
  // const compareContext = useContext(CompareContext);
  // const quantity = context.quantity;



  return (
    <div>
      {noTitle ? (
        ""
      ) : (
        <div className="title1 section-t-space">
          <h4>exclusive products</h4>
          <h2 className="title-inner1">special products</h2>
        </div>
      )}

      <section className={designClass}>
        <Container>
          <Tabs className="theme-tab">
            <TabList className="tabs tab-title">
              <Tab
                className={activeTab == type ? "active" : ""}
                onClick={() => setActiveTab(type)}
              >
                NEW ARRIVAL
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                FEATURED{" "}
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                SPECIAL
              </Tab>
            </TabList>

            <TabPanel>
              <TabContent
                data={product}
               
                cartClass={cartClass}
                startIndex={0}
                endIndex={8}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={product}
               
                cartClass={cartClass}
                startIndex={0}
                endIndex={8}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={product}
               
                cartClass={cartClass}
                startIndex={0}
                endIndex={8}
              />
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default SpecialProducts;
