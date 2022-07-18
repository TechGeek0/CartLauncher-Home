import React from 'react'
import HeaderOne from '../headers/header-one';
import HeaderThree from '../headers/header-three';
import Helmet from "react-helmet";
import ModalComponent from '../common/Modal';
import Banner from './Fashion/Components/Banner'
import CollectionBanner from "./Fashion/Components/Collection-Banner";
import Paragraph from "../common/Paragraph";
import TopCollection from '../common/Collections/Collection3'
import { Product2, Product4} from "../../services/script";
import Blog from "../common/Blog/blog1";
import Parallax from './Fashion/Components/Parallax'
import ServiceLayout from '../common/Service/service1'
import MasterFooter from "../footers/common/MasterFooter";
import SpecialProducts from '../common/Collections/TabCollection1'
import Instagram from "../common/instagram/instagram1";
import LogoBlock from "../common/logo-block";
import { ToastContainer } from "react-toastify";
import TapTop from '../common/widgets/Tap-Top';
import ThemeSetting from '../customizer/theme-settings'
import SettingProvider from '../../helpers/theme-setting/SettingProvider';
import ConsentBanner from '../common/widgets/ConsentBanner';
import '../../../static/assets/scss/app.scss';
import '../../../static/assets/scss/style.css';
import "../../../static/assets/scss/slick.scss"
import "../../../static/assets/scss/slick-theme.scss"
import '../../../static/assets/scss/font-awesome/_variables.scss'



 const MainLayout = () =>{
  
  // console.log(data)
  return (
     
<>

<SettingProvider>

  
<Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/1.png"} />
      </Helmet>
      <ModalComponent />
     <HeaderThree  topClass="top-header"/> 
     
     <Banner />
     <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          toastClassName="toast-custom-style"
        />
     <CollectionBanner  />
     <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      />
      <TopCollection
    

        noTitle="null"
        backImage={true}
        type="fashion"
        title="top collection"
        subtitle="special offer"
        productSlider={Product4}
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="false"
        cartClass="cart-info cart-wrap"
      />
      <Parallax />
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
      <ServiceLayout sectionClass="border-section small-section" />
      <Blog type="fashion" title="title1" inner="title-inner1" />
      <Instagram type="fashion" />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterFooter
        // data={data}
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        // logoName={"logo.png"}
      />
      <TapTop />
      <ConsentBanner />
      <ThemeSetting />
      </SettingProvider>
     
      </>
  )
}
     

export default MainLayout

