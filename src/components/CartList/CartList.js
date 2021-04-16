import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import { CartTotalOrderStyle, Wrapper } from "./Styles";

const CartList = ({ cartItems, addToCart, removeFromCart, handleDrawer }) => {
  const calculateTotal = (items) => {
    return items.reduce((ack, item) => ack + item.quantity * item.price, 0);
  };

  return (
    <Wrapper>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <CartItems
            key={index}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
      <CartTotalOrderStyle>
        <h2>Total: ₹{calculateTotal(cartItems).toFixed(2)}</h2>
        <Link to="/order">
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleDrawer}
          >
            Place Order
          </Button>
        </Link>
      </CartTotalOrderStyle>
    </Wrapper>
  );
};

export default CartList;
