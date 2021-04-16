import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {
  ProductContainerStyle,
  ProductImageStyle,
  ProductPriceStyle,
} from "./Styles";
import Rating from "@material-ui/lab/Rating";

const Product = ({ id, name, image, price, description }) => {
  const dispatch = useDispatch();

  const handleAddProducts = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image,
      })
    );
  };

  return (
    <ProductContainerStyle>
      <ProductImageStyle>
        <img src={image} alt="productCatagory" style={{ height: 150 }} />
      </ProductImageStyle>
      <h4>{name}</h4>
      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
      <Rating
        name="half-rating-read"
        defaultValue={3.5}
        precision={0.5}
        readOnly
      />
      {/* <p>{description}</p> */}
      <ProductPriceStyle>
        <p>₹{Math.floor(price)}</p>
        <p
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginLeft: "15px",
          }}
        >
          ₹{Math.floor(price * 1.25)}
        </p>
        <button onClick={handleAddProducts}>ADD</button>
      </ProductPriceStyle>
    </ProductContainerStyle>
  );
};

export default Product;
