import React, { useState,useContext } from "react";
// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
import { Collapse } from "reactstrap";
import FilterContext from "../../helpers/filter/FilterContext";



// const GET_BRAND = gql`
//   query getBrands($type: String) {
//     getBrands(type: $type) {
//       brand
//     }
//   }
// `;

const Brand = (props) => {
  
  const context = useContext(FilterContext);
  // const isChecked = context.isChecked;
  // const filterChecked = context.filterChecked;
  const [isOpen, setIsOpen] = useState(false);
  const toggleBrand = () => setIsOpen(!isOpen);



  return (
    <div className="collection-collapse-block open">
      <h3 className="collapse-block-title" onClick={toggleBrand}>
        Store Location
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
          {props.data &&
                        props.data.storeLocation.map((item, index) => (
                          <div className="filter-item" key={`storelocation_${index}`}>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={`brand-${index + 1}`}
                                // onClick={() => {
                                //   filterChecked("storeLocation", item._id);
                                // }
                                // }
                                // defaultChecked={ -1 < findIndex( filters[ 'brand' ],
                                //     filter => filter === item ) ? true : false }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={`brand-${index + 1}`}
                              >
                                {item.name}
                              </label>
                            </div>
                          </div>
                        ))}
                
              
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Brand;
