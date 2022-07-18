import React, { useState } from "react";
import FilterContext from "./FilterContext";
import {
 
  useLocation
} from "@reach/router";

const FilterProvider = (props) => {
  const {search}  = useLocation();
  
  const brand = new URLSearchParams(search).get("brand");
  const color = new URLSearchParams(search).get("color");
  const size = new URLSearchParams(search).get("size");
  const category = new URLSearchParams(search).get("category");
  const min = new URLSearchParams(search).get("min");
  const max = new URLSearchParams(search).get("max");
  let sizeParam = size ? size.split(",") : null;
  let param = brand ? brand.split(",") : [];
  const [selectedCategory, setSelectedCategory] = useState(
    category ? category : ""
  );
  const [selectedBrands, setSelectedBrands] = useState(param ? param : []);
  const [selectedColor, setSelectedColor] = useState(color ? color : "");
  const [selectedSize, setSelectedSize] = useState(sizeParam ? sizeParam : []);
  const [selectedPrice, setSelectedPrice] = useState({
    min: min ? min : 0,
    max: max ? max : 500,
  });
  const [isChecked, setIsChecked] = useState(true);
  const [filterChecked, setFilterChecked] = useState([{}]);

  const handleBrands = (brand, checked) => {
    var index = selectedBrands.indexOf(brand);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{ brand, checked }]);
      setSelectedBrands(selectedBrands.filter((e) => e !== brand));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{ brand, checked }]);
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSizes = (size, checked) => {
    var index = selectedSize.indexOf(size);
    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{ size, checked }]);
      setSelectedSize(selectedSize.filter((e) => e !== size));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{ size, checked }]);
      setSelectedSize([...selectedSize, size]);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        ...props,
        state: selectedCategory,
        setSelectedColor,
        setSelectedCategory,
        setSelectedBrands,
        selectedBrands,
        selectedColor,
        selectedPrice,
        isChecked,
        filterChecked,
        selectedSize,
        setSelectedSize,
        setSelectedPrice,
        handleBrands: handleBrands,
        handleSizes: handleSizes,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
