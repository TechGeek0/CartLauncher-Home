import React from 'react';
import { Col } from 'reactstrap';
import NewProduct from './newProduct';
import Category from './category';
import Brand from './brand'
// import Color from './color'
import Size from './size'
import Price from './price';

const FilterPage = ({data,sm,sidebarView,closeSidebar}) => {

    return (
        <>
            <Col sm={sm} className="collection-filter" style={sidebarView ? {left:"0px"} : {}}>
                {/* <!-- side-bar colleps block stat --> */}
                <div className="collection-filter-block">
                    {/* <!-- brand filter start --> */}
                    <div className="collection-mobile-back" onClick={() => closeSidebar()}>
                        <span className="filter-back">
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>


                   { 
                 typeof window !== 'undefined' &&  window.location.pathname.includes('/collection' || '/subcollection') ?
                     <>
                     </>
                        :
                        <Category data={data.allCategories}/>
                
                
                }
                    
                    
                    
                    
                    

                    

                    <Brand data={data.metadata}/>
                    {/* <Color/> */}
                    <Size/>
                    <Price />
                    
                  
                
                    
                </div>
                
                {/* <!-- silde-bar colleps block end here -->*/}
                <NewProduct data={data.allProducts}/>
                {/* <!-- side-bar banner start here -->  */}
                <div className="collection-sidebar-banner">
                    {/* <Media src={"/static/c9131499063ed68b6b943903750d61fe/1da2a/TvA7KA.jpg"} className="img-fluid blur-up lazyload" alt="" /> */}
                </div>
                {/* <!-- side-bar banner end here --> */}
            </Col>
        </>
    )
}

export default FilterPage;