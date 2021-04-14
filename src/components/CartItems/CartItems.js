import Button from "@material-ui/core/Button";
import { Wrapper } from "./Styles";
import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartItems = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h4>{item.name}</h4>
        <div className="information">
          <p>Price: ₹{item.price}</p>
          <p>Total: ₹{(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="large"
            color="secondary"
            disableElevation
            variant="outlined"
            onClick={() => removeFromCart(item.id)}
          >
            <RemoveIcon />
          </Button>
          <p>{item.quantity}</p>
          <Button
            size="small"
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
      <img src={item.image} alt="itemCover" />
    </Wrapper>
  );
};

export default CartItems;
