// import { findIndex } from "../utils";
// import{useContext } from "react";

// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
// import FilterContext from '../helpers/filter/FilterContext';



/**
 * Get visible products
 *
 * @param {Array} products
 * @param {Object} param1
 * @return {Array} filtered products
 */
export const GetVisibleProducts = (
  
  products,
   category ,
   sortBy,
   value,
   condition
  ) => {
    // const filterContext = useContext(FilterContext);
    // console.log(products,"check cat")
  return products.nodes
    .filter((item) => {
      // console.log(item)
      let catResult = false
        // storeLocationResult = false,
        // brandResult = false,
        // colorResult = false,
       let valResult = false
        // ratingResult = false,
        let conditionResult = false;

      if (category) {
        // console.log(item.category,category,"matchca")

          if (item.category._id === category || category === "1")
            catResult = true;
        
      } else {
        catResult = true;
      }
      // if (storeLocation && storeLocation.length > 0) {
      //   for (let i = 0; i < storeLocation.length; i++) {
      //     if (item.storeLocation?._id === storeLocation[i]) {
      //       storeLocationResult = true;
      //     }
      //   }
      // } else {
      //   storeLocationResult = true;
      // }
      if(condition && condition.length > 0){
        for(let i = 0; i < condition.length; i++){
          if(item.condition === condition[i]){
            conditionResult = true;
          }
        }
      }
      else{
        conditionResult = true;
      }
      // if(value && value.length > 0){
      //   for(let i = 0; i < value.length; i++){
      //     if(item.value === value[i]){
      //       valResult = true;
      //     }
      //   }
      // }
      // else{
      //   valResult = true;
      // }

      // if (brand && brand.length > 0) {
      //   for (let i = 0; i < brand.length; i++) {
      //     if (-1 !== findIndex(item.brands, (br) => br === brand[i]))
      //       brandResult = true;
      //   }
      // } else {
      //   brandResult = true;
      // }

      // if (color && color.length > 0) {
      //   for (let i = 0; i < color.length; i++) {
      //     if (-1 !== findIndex(item.variants, (cl) => cl.color === color[i]))
      //       colorResult = true;
      //   }
      // } else {
      //   colorResult = true;
      // }

      // if (rating && rating.length > 0) {
      //   for (let i = 0; i < rating.length; i++) {
      //     if (item.ratings === rating[i]) ratingResult = true;
      //   }
      // } else {
      //   ratingResult = true;
      // }

      let price = item.discount ? item.salePrice : Number(item.price);

      if (value) {
        if (value.min <= price && price <= value.max) {
          valResult = true;
        }
      } else {
        valResult = true;
      }

      return (
        catResult &&
        conditionResult &&
        valResult

        
      );
    })
    .sort((product1, product2) => {
      // console.log(product1,product2,sortBy,'hello')
      let price1 =
        product1.discount > 0 ? product1.salePrice : Number(product1.price);
      let price2 =
        product2.discount > 0 ? product2.salePrice : Number(product2.price);

      if ("Newest" === sortBy) {
        return new Date(product2.createdAt) - new Date(product1.createdAt);
      } else if ("rating" === sortBy) {
        return product2.ratings > product1.ratings ? 1 : -1;
      } else if ("AscOrder" === sortBy) {
        return product1.title.localeCompare(product2.title);
      } else if ("DescOrder" === sortBy) {
        return product2.title.localeCompare(product1.title);
      } else if ("HighToLow" === sortBy) {
        return price2 < price1 ? -1 : 1;
      } else if ("LowToHigh" === sortBy) {
        return price2 > price1 ? -1 : 1;
      } 
      else if ("AscQuantity" === sortBy) {
        return product1.quantity < product2.quantity ? -1 : 1;
      }
      else if ("DescQuantity" === sortBy) {
        return product1.quantity > product2.quantity ? -1 : 1;
      }
      else {
        return product2.id < product1.id ? -1 : 1;
      }
    });
};

/**
 * Get featured products
 * @param {Array} products
 * @return {Array} featuredProducts
 */
export const getFeaturedProducts = (products) => {
  return products.filter((item) => true === item.featured);
};

/**
 * Get sold products
 * @param {Array} products
 * @return {Array} saleProducts
 */
export const getSaleProducts = (products) => {
  return products.filter((item) => item.discount > 0);
};

/**
 * Get new products
 * @param {Array} products
 * @return {Array} newProducts
 */
export const getNewProducts = (products) => {
  return products.filter((item) => item.new);
};

/**
 * Get deal products
 * @param {Array} products
 * @return {Array} dealProducts
 */
export const getDealProducts = (products, deal) => {
  return products.filter((item) => item.deal === deal);
};

/**
 * Get products which has top rating
 * @param {Array} products
 * @return {Array} topRatingProducts
 */
export const getTopRatingProducts = (products) => {
  return products
    .filter((product) => {
      return product.ratings > 2;
    })
    .sort((product1, product2) => {
      return product2.ratings < product1.ratings ? -1 : 1;
    });
};

/**
 * Get products which has top sale
 * @param {Array} products
 * @return {Array} topSellingProducts
 */
export const getTopSellingProducts = (products) => {
  return products.filter((item) => true === item.top);
};

/**
 * Get products filtered by selectedCategory
 * @param {Array} products
//  * @param {String} selectedCategory
 * @return {Array} filteredProducts
 */
export const getProductsByselectedCategory = (products, selectedCategory) => {
  if (selectedCategory === "All") return products;

  if (-1 !== selectedCategory.indexOf("&")) {
    selectedCategory = selectedCategory.split(" & ");
  }

  return products.filter((item) => {
    let result = false;

    if (Array.isArray(selectedCategory)) {
      for (let i = 0; i < selectedCategory.length; i++) {
        if (-1 !== item.selectedCategory.indexOf(selectedCategory[i])) {
          result = true;
        }
      }
    } else {
      if (-1 !== item.selectedCategory.indexOf(selectedCategory)) result = true;
    }
    return result;
  });
};

/**
 * Get number of products filtered by selectedCategory
 * @param {Array} products
 * @param {String} selectedCategory
 * @return {Integer} count of suitable products
 */
export const getCountByselectedCategory = (products, selectedCategory) => {
  if (selectedCategory === "All") return products.length;
  if (selectedCategory === "Sale")
    return products.filter((item) => item.discount > 0).length;
  return products.filter((item) => -1 !== item.selectedCategory.indexOf(selectedCategory))
    .length;
};

/**
 * get total Price of products in cart.
 * @param {Array} cartItems
 * @return {Float} totalPrice
 */
export const getCartTotal = (cartItems) => {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total +=
      parseInt(cartItems[i].quantity, 10) *
      (cartItems[i].discount ? cartItems[i].salePrice : cartItems[i].price);
  }
  return total;
};

/**
 * get number of products in cart
 * @param {Array} cartItems
 * @return {Integer} numbers of cart items in cartlist
 */
export const getCartCount = (cartItems) => {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += parseInt(cartItems[i].quantity, 10);
  }

  return total;
};

/**
 * Get number of products filtered by rating
 * @param {Array} products
 * @param {String} selectedCategory
 * @return {Integer} number of products filtered by rating
 */
export const getCountByRating = (products, rating) => {
  return products.filter((item) => item.rating === rating).length;
};
