import React,{useState,useEffect} from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,

  Row,
} from "reactstrap";
import { navigate } from "gatsby";

const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};
const SearchOverlay = () => {
  const [keyword, setKeyword] = useState("")
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
  return (
    <div id="search-overlay" className="search-overlay">
      <div>
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          ×
        </span>
        <div className="overlay-content">
          <Container>
            <Row>
              <Col xl="12">
                <Form  onSubmit={e => {
                      e.preventDefault()

                      navigate("/allcollection?q=" + keyword)
                    }}>
                  <FormGroup>
                  
                    <input
                      type="search"
                      value={keyword}
                      autoComplete="off"
                      className="form-control"
                      
                      name="Search"
                      id="q"
                      onChange={e => setKeyword(e.target.value)}
                      placeholder="Search"
                      required
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary" >
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
