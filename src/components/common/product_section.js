import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { addToCart } from "../../reducers/cart"
// import slugify from "slugify"
// import { Link } from "gatsby"
import Slider from "react-slick"
import { Product4 } from "../../services/script"
import ProductBox1 from "../product-box/ProductBox1"

const ProductSection = ({ data, addProductToCart }) => {
  // console.log(data)

  // const [selectedProduct, setSelectedProduct] = useState()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  // const uniqueTags = []
  const [quantity, setQuantity] = useState(1)

  // const getSelectedProduct = item => {
  //   setSelectedProduct(item)
  //   toggle()
  // }

  //   var { loading, data } = useQuery(GET_PRODUCTS, {
  //     variables: {
  //       type: "fashion",
  //       indexFrom: 0,
  //       limit: 8,
  //     },
  //   });
  // var loading = false

  return (
    <Container>
      <Row>
        <Col className="product-related mt-4">
          <h2>Related products</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Slider {...Product4} className="product-m no-arrow">
            {data &&
              data.nodes.map((product, index) => (
                <ProductBox1
                  product={product}
                  key={index}
                  onAddToCart={() => addProductToCart(product, quantity)}
                  cartClass="cart-info cart-wrap"
                  title="title1 section-t-space"
                  inner="title-inner1"
                  designClass="section-b-space p-t-0 ratio_asos"
                  noSlider="false"
                />
              ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

export const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: item => dispatch(addToCart(item)),
  }
}

export default connect(null, mapDispatchToProps)(ProductSection)
