import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { NavStyle, NavIconStyle } from "./Styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Bagde from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";
import CartList from "../CartList/CartList";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

const Navbar = () => {
  const { products } = useSelector((state) => state.cartReducer);
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useDispatch();

  const variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.08,
      },
    },
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <NavStyle>
      <motion.h1 variants={variants} initial="hidden" animate="visible">
        LOST
      </motion.h1>
      <Searchbar />
      <NavIconStyle>
        <LocationOnIcon
          style={{
            backgroundColor: "white",
            padding: "0 2rem",
            borderRight: "1px solid black",
          }}
        />
        <NotificationsIcon
          style={{
            backgroundColor: "white",
            padding: "0 2rem",
            borderRight: "1px solid black",
          }}
        />
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <CartList
            cartItems={products}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <Bagde
          badgeContent={products.length}
          color="error"
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            margin: "0 2rem",
            // borderRight: "1px solid black",
          }}
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCartIcon style={{ backgroundColor: "white" }} />
        </Bagde>
        <Link
          to="/account"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <PersonIcon
            style={{
              backgroundColor: "white",
              padding: "0 2rem",
              borderLeft: "1px solid black",
            }}
          />
        </Link>
      </NavIconStyle>
    </NavStyle>
  );
};

export default Navbar;
