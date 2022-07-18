import React, { Fragment, useEffect } from "react";
import HeaderFour from "../../../../components/headers/header-four";
import ThemeSettings from "../../../../components/customizer/theme-settings";
import SpecialProducts from "../../../../components/common/Collections/TabCollection1";
import About from "./components/About";
import HomeBanner from "./components/home-banner";
import { Product2 } from "../../../../services/script";
import ModalComponent from "../../../../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../../../../components/footers/common/MasterFooter";
import SettingProvider from "../../../../helpers/theme-setting/SettingProvider";

const Electronic = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#cc2121");
  });
  return (
    <SettingProvider>
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/7.png"} />
      </Helmet>
      <ModalComponent />
      <div className="container-fluid layout-8">
        <title>MultiKart | Electronic Store</title>

        <HeaderFour
          fluid={true}
          hfluid={true}
          logoName={"logo/3.png"}
          topClass="top-header white-bg border-bottom-grey"
        />

        <HomeBanner />
        <div className="layout-8-bg">
          {/*About Section*/}
          <About />
          {/*About Section End*/}

          {/*Product slider*/}
          <SpecialProducts
            type="fashion"
            backImage={true}
            // data={data}
            productSlider={Product2}
            
            title="title1 section-t-space"
            inner="title-inner1"
            designClass="section-b-space p-t-0 ratio_asos"
            noSlider="false"
            cartClass="cart-info cart-wrap"
          />
          {/*Product slider End*/}
        </div>
        <div className="footer-white electronic-footer">
          <MasterFooter
            footerClass={`footer-light`}
            footerLayOut={"light-layout upper-footer"}
            containerFluid={true}
            footerSection={"small-section border-section border-top-0"}
            belowSection={"section-b-space light-layout"}
            belowContainerFluid={true}
            CopyRightFluid={true}
            newLatter={true}
            logoName={"logo/3.png"}
          />
        </div>

        <ThemeSettings />
      </div>
    </Fragment>
    </SettingProvider>
  );
};

export default Electronic;
