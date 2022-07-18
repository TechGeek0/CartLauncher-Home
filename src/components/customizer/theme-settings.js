import React, { useEffect, useState, useContext } from "react";
// import {a} from "react-router-dom";
import SettingContext from "../../helpers/theme-setting/SettingContext";
import { ToastContainer } from "react-toastify";
import  config  from "./config.json";
import {
  // Media,
  // Col,
  // Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
} from "reactstrap";

const ThemeSettings = () => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const context = useContext(SettingContext);
  const [themeLayout, setThemeLayout] = useState(false);
  const layoutType = context.layoutFun;
  const layoutColorFunc = context.layoutColorFun;
  const layoutState = context.state;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  /*=====================
     Tap on Top
     ==========================*/
  useEffect(() => {
    if (config.layout_version && config.layout_type) {
      document.body.className = `${config.layout_version}  ${config.layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty(
        "--theme-deafult",
        localStorage.getItem("color")
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (document.documentElement.scrollTop > 600) {
        document.querySelector(".tap-top").style = "display: block";
      } else {
        document.querySelector(".tap-top").style = "display: none";
      }
    }
  };

  const openSetting = () => {
    if (typeof window !== "undefined") {
      document.getElementById("setting_box").classList.add("open-setting");
      document.getElementById("setting-icon").classList.add("open-icon");
    }
  };

  const closeSetting = () => {
    if (typeof window !== "undefined") {
      document.getElementById("setting_box").classList.remove("open-setting");
      document.getElementById("setting-icon").classList.remove("open-icon");
    }
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (typeof window !== "undefined") {
      document.body.classList.add("dark");
      config.layout_version = "dark";
    }
  } else {
    if (typeof window !== "undefined") {
      document.body.classList.remove("dark");
      config.layout_version = "light";
    }
  }

  
 

  return (
    <div>
      <a to={null} onClick={() => openSetting()}>
        <div className="setting-sidebar" id="setting-icon">
          <div>
            <i className="fa fa-cog" aria-hidden="true"></i>
          </div>
        </div>
      </a >
      <div id="setting_box" className="setting-box">
        <a to={null} className="overlay" onClick={() => closeSetting()}></a >
        <div className="setting_box_body">
          <div onClick={() => closeSetting()}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </div>
          <div className="setting-body">
            
           
        
           
            <div
              className={`setting-title ${
                isOpen && collapse === 4 ? "active" : ""
              }`}
            >
              <h4
                onClick={() => {
                  setCollapse(4);
                  setIsOpen(!isOpen);
                }}
              >
                color option
                <span className="according-menu"></span>
              </h4>
            </div>
            <Collapse isOpen={collapse === 4 ? isOpen : false}>
              <div className="setting-contant">
                <ul className="color-box">
                  <li>
                    <input
                      id="colorPicker1"
                      type="color"
                      defaultValue="#ff4c3b"
                      name="Background"
                      onChange={(e) => layoutColorFunc(e)}
                    />
                  </li>
                 
                </ul>
                <p className="ml-3">theme deafult color</p>
              </div>
            </Collapse>
            <div
              className={`setting-title ${
                isOpen && collapse === 5 ? "active" : ""
              }`}
            >
              <h4
                onClick={() => {
                  setCollapse(5);
                  setIsOpen(!isOpen);
                }}
              >
                RTL
                <span className="according-menu"></span>
              </h4>
            </div>
            <Collapse isOpen={collapse === 5 ? isOpen : false}>
              <div className="setting-contant">
                <ul className="setting_buttons">
                  <li className="active" id="ltr_btn">
                    <a
                      href="# "
                      className="btn setting_btn"
                      onClick={() => layoutType(layoutState)}
                    >
                      {layoutState}
                    </a >
                  </li>
                </ul>
              </div>
            </Collapse>
                     </div>
        </div>
      </div>
      <div className="sidebar-btn dark-light-btn">
        <div className="dark-light">
          <div
            className="theme-layout-version"
            onClick={() => changeThemeLayout()}
          >
            {themeLayout ? "Light" : "Dark"}
          </div>
        </div>
      </div>
    
      <Modal centered={true} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Config</ModalHeader>
        <ModalBody className="p-3">
          {Object.keys(config).map((key, i) => (
            <p key={i}>
              <span>{key}:</span>
              <span>{config[key]}</span>
            </p>
          ))}
        </ModalBody>
        <ModalFooter>
          <p className="lh-cls">
            <b>Note: </b>Copy upper config and paste it in{" "}
            <b>"/components/customizer/config.json"</b>{" "}
          </p>
        </ModalFooter>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default ThemeSettings;
