import React, { useEffect, useState } from "react"
import NavBar from "./common/navbar";
import CartContainer from "../containers/CartContainer"
import Currency from "./common/currency"
import TopBarDark from "./common/topbar-dark"
import { navigate } from "gatsby"
// import { Link } from 'gatsby';
import SideBar from "./common/sidebar"
// import Cart from "../containers/Cart";
import LogoImage from "./common/logo"
import {  Container, Row, Col } from "reactstrap"
import SearchOverlay from "./common/search-overlay"

const HeaderThree = props => {
  const [keyword, setKeyword] = useState("")

  /*=====================
         Pre loader
         ==========================*/

  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display: none"
    }, 2000)

    window.addEventListener("scroll", handleScroll)
    let urlSearch = new URLSearchParams(
      decodeURIComponent(window.location.search)
    )
    // console.log("Search")
    if (typeof window !== "undefined" && urlSearch.get("q"))
      setKeyword(urlSearch.get("q"))
    else setKeyword("")
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove("fixed")
      } else document.getElementById("sticky").classList.add("fixed")
    } else {
      document.getElementById("sticky").classList.remove("fixed")
    }
  }

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block"
  }
  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav")
    if (openmyslide) {
      openmyslide.classList.add("open-side")
    }
  }
  

  return (
    <div>
      <header id="sticky" className="sticky header-2 header-6">
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBarDark topClass="top-header d-sm-block" />

        <Container>
          <Row>
            <Col>
              <div className="main-menu border-section border-top-0">
                <div className="brand-logo layout2-logo">
                  <LogoImage  />
                </div>
                
                <div>
                  <form
                    className="form_search"
                    
                    // onSubmit={e => {
                    //   e.preventDefault()

                    //   navigate("/allcollection?q=" + keyword)
                    // }}
                  >
                    <input
                      type="search"
                      value={keyword}
                      autoComplete="off"
                      className="nav-search nav-search-field"
                      
                      name="Search"
                      id="a"
                      onChange={e => setKeyword(e.target.value)}
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      name="nav-submit-button"
                      className="btn-search"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            
                            <i className="fa fa-search" onClick={openSearch}></i>
                          </div>
                        </li>
                        <Currency />

                        {/*Header Cart Component */}
                        <CartContainer />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="12">
              <div className="main-nav-center"><NavBar /></div>
            </Col>
          </Row>
        </Container>
      </header>
      <SearchOverlay />
    </div>
  )
}

export default HeaderThree
