import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {
  ProductContainerStyle,
  ProductImageStyle,
  ProductPriceStyle,
} from "./Styles";

const Product = ({ id, name, image, price, quantity, description }) => {
  const dispatch = useDispatch();

  const handleAddProducts = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image,
        quantity: quantity,
      })
    );
  };

  return (
    <ProductContainerStyle>
      <ProductImageStyle>
        <img src={image} alt="productCatagory" style={{ height: 150 }} />
      </ProductImageStyle>
      <h4>{name}</h4>
      {/* <p>{description}</p> */}
      <ProductPriceStyle>
        <p>₹{Math.floor(price)}</p>
        <p style={{ textDecoration: "line-through", marginLeft: "15px" }}>
          ₹{price}
        </p>
        <button onClick={handleAddProducts}>Add</button>
      </ProductPriceStyle>
    </ProductContainerStyle>
  );
};

export default Product;
