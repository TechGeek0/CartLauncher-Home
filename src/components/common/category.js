import React, { useState,useContext,useEffect } from "react";
import { Collapse } from "reactstrap";
import { navigate } from "gatsby";
// import {graphql,StaticQuery,Link} from 'gatsby'
import FilterContext from "../../helpers/filter/FilterContext";

const Category = (props) => {
  const context = useContext(FilterContext);
 
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const setSelectedCategory = context.setSelectedCategory;
  

  const [url, setUrl] = useState();
  useEffect(() => {
    const pathname =  window.location.pathname;
    setUrl(pathname);
  }, []);
  const updateCategory = (category) => {
    navigate(
      `${url}?${encodeURIComponent(category)}`
    );


    
    setSelectedCategory(category);
    
  };



  return (
    <>
   
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleCategory}>
          Category
        </h3>
        <Collapse isOpen={isCategoryOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <ul className="category-list">
                {props.data?.nodes.map((category,index) => (
                <li key={index}>
                  <a href={null}  onClick={()=> updateCategory(category.name)}>
                    {category.name}
                  </a >
                </li>
                ))}
                 
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
     
    </>
  );
};

export default Category;





  