import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import NavIcons from "../NavIcons/NavIcons";
import { NavStyle, NavIconStyle } from "./Styles";
import { motion } from "framer-motion";

const Navbar = () => {
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

  return (
    <NavStyle>
      <motion.h1 variants={variants} initial="hidden" animate="visible">
        LOST
      </motion.h1>
      <Searchbar />
      <NavIconStyle>
        <NavIcons iconName="fas fa-map-marker-alt" />
        <NavIcons iconName="fas fa-cart-plus" />
        <NavIcons iconName="fas fa-bell" />
        <NavIcons iconName="fas fa-user" />
      </NavIconStyle>
    </NavStyle>
  );
};

export default Navbar;
