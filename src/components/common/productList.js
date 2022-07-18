import React, { useState, useEffect, useContext } from "react"
import { Col, Row, Media, Button, Spinner } from "reactstrap"
import FilterContext from "../../helpers//filter/FilterContext"
import ProductItem from "../product-box/ProductBox1"

import PostLoader from "./PostLoader"
import CartContext from "../../helpers/cart"

import { Link, navigate } from "gatsby"
import { GetVisibleProducts } from "../../services"

const ProductList = ({
  colClass,
  layoutList,
  openSidebar,
  noSidebar,
  data,
  category,
  subCategory,
  allcategory
}) => {
  // const cartContext = useContext(CartContext)
  // const quantity = cartContext.quantity;
  const [limit, setLimit] = useState(12)

  const [grid, setGrid] = useState(colClass)
  const filterContext = useContext(FilterContext)
  // const selectedBrands = filterContext.selectedBrands
  // const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice
  const selectedCategory = filterContext.state
  const selectedSize = filterContext.selectedSize
  const [sortBy, setSortBy] = useState("AscOrder")
  const [isLoading, setIsLoading] = useState(false)
  const [layout, setLayout] = useState(layoutList)
  // const [url, setUrl] = useState()



  
  // const selectedColor = ['Red','Green','Blue']
  const [search, setSearch] = useState("")
  //  selectedSize=['S','M','L'];
  var loading = false

  let products = []
  
  // console.log(selectedSize);
  let keyword = typeof window !== "undefined" && window.location.search.slice(1)
  
  useEffect(() => {
    let urlSearch = new URLSearchParams(
      decodeURIComponent(window.location.search)
    )
    if (typeof window !== "undefined"){ setSearch(urlSearch.get("q"))
    }
    return () => {}
  }, [keyword])
  // useEffect(() => {
  //   const pathname =  typeof window !== "undefined" && window.location.pathname
    
  //   navigate(`${pathname}?${encodeURIComponent(selectedCategory)}`)
    
  // }, [selectedCategory])

  // console.log(search)
  let searchProducts
  if (search) {
    searchProducts = data.allProducts.nodes.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    })
    

  }




 
    
  
  
    
  



 
 

  // console.log(allcategory,'subcategories')
  // const handlePagination = () => {
  //   setIsLoading(true);
  //   setTimeout(
  //     () =>

  //     1000
  //   );
  // };

  // const removeBrand = (val) => {
  //   const temp = [...selectedBrands];
  //   temp.splice(selectedBrands.indexOf(val), 1);
  //   filterContext.setSelectedBrands(temp);
  // };

  // const removeSize = (val) => {
  //   const temp = [...selectedSize];
  //   temp.splice(selectedSize.indexOf(val), 1);
  //   filterContext.setSelectedSize(temp);
  // };

  // const removeColor = () => {
  //   filterContext.setSelectedColor("");
  // };
  // const getQueryString = (filters) => {
  //   let queryString = "";
  //   if (data.allCategories.nodes.length > 0) {
  //     let categories = data.allCategories.nodes
  //       // .filter((category) => filters.category.includes(category._id))
  //       .map((category) => category.name.replace(/&+/g, "amp;"));
  //     queryString += `category=${categories.join("_")}&`;
  //   }
  // }

  let categoryIds
  if (selectedCategory) {
    categoryIds = data.allCategories.nodes
      .filter(category => selectedCategory === category.name)
      .map(category => category._id)[0]
    
  }




 
   
   const[count,setCount] = useState( search ? searchProducts?.length : products?.length);
   

    const showMoreItems = () => {
      setLimit(prevValue => prevValue + 4)
      
      setCount(count -4);
      
    }
    
    products = GetVisibleProducts(
      data.allProducts,
      categoryIds,
      sortBy,
      selectedPrice,
      selectedSize
    )

   


    console.log(category,subCategory,'category')

    

    


  return (
    searchProducts?.length !=0 && products?.length !=0 ? (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <div className="top-banner-wrapper">
              <Link to={null}>
                <Media
                  src={
                    "/static/0e121f9633b1b6ecc855a6722ed2974f/630fb/icon_header_two-parent-household.png"
                  }
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </Link>
              <div className="top-banner-content small-section">
                 {typeof window !== "undefined" && window.location.pathname.includes('/allcollection') ? (
                  
                
                <h4> All Collection</h4>

                 ): typeof window !== "undefined" && window.location.pathname.includes('/collection') ? (
<>
          {category ? (<>
            <h4>Collection</h4>
            <strong>{`${category.name}`}</strong>
            </>
          ):(

            <>
            <h4>Collection</h4>
            <strong>{`${subCategory.name}`}</strong>  
            </>

 

          )
          
        }
                  
                  </>
                  ): ''}
                
                
                
              
                
                
              
              </div>
            </div>

            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          Filter
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div className="product-filter-content">
                      <div className="search-count">
                        <h5>
                          {data && searchProducts
                            ? `Showing Products ${searchProducts.length} of ${data.allProducts.nodes.length}`
                            : `Showing Products ${products.length} of ${data.allProducts.nodes.length}`}{" "}
                          Result
                        </h5>
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li>
                            <i
                              className="fa fa-th grid-layout-view"
                              onClick={() => {
                                setLayout("")
                                setGrid("col-lg-3")
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-list-ul list-layout-view"
                              onClick={() => {
                                setLayout("list-view")
                                setGrid("col-lg-12")
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="collection-grid-view"
                        style={
                          layout === "list-view"
                            ? { opacity: 0 }
                            : { opacity: 1 }
                        }
                      >
                        <ul style={{listStyle:'none'}}>
                          <li >
                            <Media
                              src={`/assets/images/icon/2.png`}
                              alt=""
                              className="product-2-layout-view"
                              onClick={() => setGrid("col-lg-6")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/3.png`}
                              alt=""
                              className="product-3-layout-view"
                              onClick={() => setGrid("col-lg-4")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/4.png`}
                              alt=""
                              className="product-4-layout-view"
                              onClick={() => setGrid("col-lg-3")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/6.png`}
                              alt=""
                              className="product-6-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select
                          onChange={e => setLimit(parseInt(e.target.value))}
                        >
                          <option value="10">10 Products Par Page</option>
                          <option value="15">15 Products Par Page</option>
                          <option value="20">20 Products Par Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={e => setSortBy(e.target.value)}>
                          <option value="AscOrder">Sorting items</option>
                          <option value="HighToLow">High To Low</option>
                          <option value="LowToHigh">Low To High</option>
                          <option value="Newest">Newest</option>
                          <option value="AscOrder">Asc Order</option>
                          <option value="DescOrder">Desc Order</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {/* Product Box */}
                  {!products ||
                  !products ||
                  products.length === 0 ||
                  loading ? (
                    products &&
                  products &&
                    products.items &&
                    products.items.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="page main-content">
                            <img
                              src={`/assets/images/empty-search.jpg`}
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
                      <div className="row mx-0 margin-default mt-4">
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
                  ) : 
                  search  ?  (
                    
                    searchProducts?.length > 0 ? (
                     
                   
                        
                       searchProducts.map((product, i) => {
                        return (
                          <div className={grid} key={i}>
                            <div className="product">
                              <div>
                                <ProductItem
                                  des={true}
                                  product={product}
                                  // symbol={symbol}
                                  cartClass="cart-info cart-wrap"
                                  // addCompare={() =>
                                  //   compareContext.addToCompare(product)
                                  // }
                                  // addWishlist={() =>
                                  //   wishlistContext.addToWish(product)
                                  // }
                                  // addCart={() =>
                                  //   cartContext.addToCart(product, quantity)
                                  // }
                                />
                              </div>
                            </div>
                          </div>
                    
                        )
                      }
                      )
                      
    
    
                      ) :   <Col xs="12">
                      <div>
                        <div className="col-sm-12 empty-cart-cls text-center">
                          
                          <h3>
                            <strong>{`No Product Found for ${search}`}</strong>
                          </h3>
                          <h4>Explore more shortlist some items.</h4>
                        </div>
                      </div>
                    </Col>
                    
                   
                  ) : (
                   
                    products.slice(0, limit).map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              // symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              // addCompare={() =>
                              //   compareContext.addToCompare(product)
                              // }
                              // addWishlist={() =>
                              //   wishlistContext.addToWish(product)
                              // }
                              // addCart={() =>
                              //   cartContext.addToCart(product, quantity)
                              // }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}


                </Row>
              </div>
              <div className="section-t-space">
                <div className="text-center">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      { 
                      
                      
                      count > 0    ? (
                        

                        <Button onClick={()=>showMoreItems()}>
                          {isLoading && (
                            <Spinner animation="border" variant="light" />
                          )}
                          Load More
                        </Button>
                      ) : (
                        <Button>
                          
                          No More Products
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
    ): searchProducts?.length === 0 ? (
      <Col xs="4">
      <div>
        <div className="col-sm-12 empty-cart-cls text-center">
          
          <h3>
            <strong>{`No Product Found for ${search}`}</strong>
          </h3>
          <h4>Explore more shortlist some items.</h4>
        </div>
      </div>
    </Col>
    ): ''

  )
}

export default ProductList
