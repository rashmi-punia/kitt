import { faker } from "@faker-js/faker";
import React, {useState,useEffect, createContext, useContext, useReducer } from "react";
import axios from "axios"
export const GlobalContext = createContext();


const GlobalState = ({ children }) => {

//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//       const fetchProducts = async () => {
//         const response = await axios.get("http://localhost/7000/api/products"); // Adjust the URL according to your API endpoint
//         setProducts(response.data);
//       };

//       fetchProducts();
//     }, []);
// console.log(products);
  
  const products = [...Array(20)].map(() => {
    const productName = faker.commerce.productName();
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      category: faker.helpers.arrayElements(["Men","Women","Baby"]) ,
      price: faker.commerce.price(),
      morePrice: parseFloat(faker.commerce.price(1,50)) + faker.commerce.price() ,
      discount: faker.helpers.arrayElement([15, 25, 40, 50, 60]),
    
      image: `https://source.unsplash.com/featured/?${encodeURIComponent(productName)}`,

      inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  // const [state, dispatch] = useReducer(cartReducer, {
  //     products: products,
  //     cart: [],
  //   });

  return (
    <GlobalContext.Provider
      value={{
        // state,dispatch ,
        products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

export const CartState = () => {
  return useContext(GlobalContext);
};
