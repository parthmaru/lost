import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import {
  ProductListStyles,
  ProductCatagoryStyle,
  ProductListButtonStyle,
} from "./Styles";
import Product from "../Product/Product";
import { testData } from "../../constants/testData";
// import { ProductPriceStyle } from "../Product/Styles";

const ProductList = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    // const data = await fetch("https://fakestoreapi.com/products/").then((res) =>
    //   res.json()
    // );

    setProducts(testData);
    // return data;
  };
  const { isLoading, error } = useQuery("products", fetchProducts);

  useEffect(() => {
    var selectedCatagoryItems = [];
    const changeCatagory = () => {
      if (selectedCatagory === "all") {
        selectedCatagoryItems = products;
        setFilteredProducts(selectedCatagoryItems);
      } else {
        selectedCatagoryItems = products.filter(
          (item) => item.category === selectedCatagory
        );
        setFilteredProducts(selectedCatagoryItems);
      }
    };

    changeCatagory();
  }, [selectedCatagory, products]);

  return (
    <>
      <ProductListStyles>
        {/* <ProductFilterStyle> */}
        <div>
          <select
            name="catagory"
            defaultValue="select catagory"
            onClick={(e) => setSelectedCatagory(e.currentTarget.value)}
          >
            <option value="select catagory">all</option>
            <option value="men clothing">men clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women clothing">women clothing</option>
          </select>
        </div>
        <div>
          <button>
            Filter
            <i className="fas fa-filter" style={{ marginLeft: "7px" }}></i>
          </button>
          <button>
            Sort By
            <i className="fas fa-sort" style={{ marginLeft: "10px" }}></i>
          </button>
        </div>
        {/* </ProductFilterStyle> */}
      </ProductListStyles>
      <ProductCatagoryStyle>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error...</h1>
        ) : filteredProducts.length ? (
          filteredProducts?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        ) : (
          products?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        )}
      </ProductCatagoryStyle>
      <ProductListButtonStyle>
        <button>Prev</button>
        <button>Next</button>
      </ProductListButtonStyle>
    </>
  );
};

export default ProductList;
