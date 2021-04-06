import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import NavIcons from "../NavIcons/NavIcons";
import { NavStyle, NavIconStyle } from "./Styles";

const Navbar = () => {
  return (
    <NavStyle>
      <h1>LOST</h1>
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
