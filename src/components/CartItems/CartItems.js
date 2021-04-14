import Button from "@material-ui/core/Button";
import { Wrapper } from "./Styles";
import React from "react";

const CartItems = ({ item, addToCart, removeFromCart }) => {
  console.log("Cart Items:", item);
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ₹{item.price}</p>
          <p>Total: ₹{(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt="itemCover" />
    </Wrapper>
  );
};

export default CartItems;
