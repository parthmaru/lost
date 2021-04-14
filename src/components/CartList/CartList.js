import CartItems from "../CartItems/CartItems";
import { Wrapper } from "./Styles";

const CartList = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) => {
    return items.reduce((ack, item) => ack + item.quantity * item.price, 0);
  };

  return (
    <Wrapper>
      <div>Your Shopping Cart</div>
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
      <h2>Total: ₹{calculateTotal(cartItems).toFixed(2)}</h2>
      {/* <h2>Total:2000</h2> */}
    </Wrapper>
  );
};

export default CartList;
