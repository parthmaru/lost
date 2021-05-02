import React from "react";
import { Button } from "@material-ui/core";
import { UserAccountStyle } from "./Styles";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <>
      <Navbar />
      <UserAccountStyle>
        <h1>Who are you?</h1>
        <Link to="/" className="userLink">
          <Button variant="contained">I'm a Customer</Button>
        </Link>
        <Link to="/vendor" className="userLink">
          <Button variant="contained">I'm a Vendor</Button>
        </Link>
        <Button variant="contained">I'm a Delievery Boy</Button>
      </UserAccountStyle>
    </>
  );
};

export default UserAccount;
