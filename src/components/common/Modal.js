import React, { useState,useEffect,useRef } from "react";
import {
  Col,
  Media,
  Row,
  Modal,
  ModalBody,
  // Input,
  // Form,
  Button,
} from "reactstrap";
import { encode } from "../../utils";

const ModalComponent = () => {
  const [modal, setModal] = useState(false);
  const[open,setOpen] = useState(false);
  const[email,setEmail] = useState('');
  const [status, setstatus] = useState("init");

  const [closeType, setCloseType] = useState(null);
  const timer = useRef(null);
  useEffect(() => {
   

    timer.current = setTimeout(() => {
      if (
      
        window.localStorage.getItem("closeType") !== "forever"
      ) {
        setModal(true);
      }
    }, 10000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [ closeType]);


  function changeCloseType(e) {
    if (document.querySelector("input[type='checkbox']").checked === true) {
      if (typeof window !== "undefined")
        window.localStorage.setItem("closeType", "forever");
      setCloseType("forever");
    } else {
      if (typeof window !== "undefined")
        window.localStorage.setItem("closeType", "once");
      setCloseType("once");
    }
  }

  const handleSubmit = (e) => {
    // this.setState({ status: "submitting" });
    setstatus('submitting');
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "subscribe",
        email: email,
        
      }),
    })
      .then((res) => {
        // this.setState({ status: "success", email: "", name: "" });
        setstatus("success");
        setEmail("");
        // setname("");
        window.localStorage.setItem("closeType", "forever");
      })
      .catch((err) => {
        setstatus("failed");
        // console.log(err);
      });

  
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  




  const toggle = () => setModal(!modal);
  

  return (
    <>
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="theme-modal modal-lg"
      centered
    >
      <div>
        <ModalBody className="modal1">
          <Row className="compare-modal">
            <Col lg="12">
              <div className="modal-bg">
                <Button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <span aria-hidden="true">&times;</span>
                </Button>
                <div className="offer-content">
                  <Media
                    src={"/assets/images/Offer-banner.png"}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  <h2>newsletter</h2>

                  { 
                  status !== 'success' ? (

                  
                  <form className="subscribe-form"
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                 
                    
                  >
                    <div className="form-group mx-sm-3">
                    <input type="hidden" name="form-name" value="newsletter" />
                  <input
                    type="hidden"
                    name="bot-field"
                    onChange={handleChange}
                  />
                      <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Enter your Email Address"
                          aria-label="Email Adress"
                          required
                          name="email"
                          onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="btn btn-solid"
                        
                      >
                        subscribe
                      </button>
                    </div>
                  </form>
                  ) :(

<h2> Thanks For Subscribing the Newsletter</h2>


                  )
                }
                </div>
                <div className="mt-3 ml-2">
            <input
                    type="checkbox"
                    className="custom-control-input"
                    id="register-policy-2"
                    defaultChecked={closeType === "forever"}
                    onChange={changeCloseType}
                  />
                  {/* style={ isIEBrowser() ? { padding: '2' } : {} } */}
                  <label
                    className="custom-control-label"
                    htmlFor="register-policy-2"
                  >
                    Do not show this popup again
                  </label>
                </div>
                
              </div>
            </Col>
            
          </Row>
        </ModalBody>
      </div>
    </Modal>
    
    </>

  );
};

export default ModalComponent;
