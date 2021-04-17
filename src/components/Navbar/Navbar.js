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
import FavoriteIcon from "@material-ui/icons/Favorite";

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

  const handleDrawer = () => {
    setCartOpen(false);
  };

  return (
    <NavStyle>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <motion.h1 variants={variants} initial="hidden" animate="visible">
          LOST
        </motion.h1>
      </Link>
      <Searchbar />
      <NavIconStyle>
        <LocationOnIcon className="navIcon" />
        <NotificationsIcon className="navIcon" />
        <FavoriteIcon className="navIcon" />
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <CartList
            cartItems={products}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            handleDrawer={handleDrawer}
          />
        </Drawer>
        <Bagde
          className="navIconBadge"
          badgeContent={products.length}
          color="error"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCartIcon style={{ backgroundColor: "white" }} />
        </Bagde>
        <Link
          to="/account"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <PersonIcon className="navIconPerson" />
        </Link>
      </NavIconStyle>
    </NavStyle>
  );
};

export default Navbar;
