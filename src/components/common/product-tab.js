import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const ProductTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const data = props.data;
  // console.log(data)

  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <Row className="product-page-main m-0">
              <Nav tabs className="nav-material">
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    Description
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Shipping & return
                  </NavLink>
                </NavItem>
              
               
              </Nav>
              <TabContent activeTab={activeTab} className="nav-material">
                <TabPane tabId="1">
                  
                  <p className="mb-0 pb-0">
                    {data.product.description}
                  </p>
                
                </TabPane>
                <TabPane tabId="2">
                  <p className="mb-0 pb-0">
                    Refer To Faq Pages For Shipping & Returns
                  </p>
                </TabPane>
               
              </TabContent>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
