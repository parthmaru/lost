import React from "react";
import { SearchInputStyle } from "./Styles";

const Searchbar = () => {
  return (
    <SearchInputStyle>
      <input
        type="text"
        name="searchbar"
        placeholder="Search Here..."
        style={{
          outline: "none",
          border: "none",
          borderRadius: 15,
          width: "43vw",
        }}
      />
      <i className="fas fa-search" style={{ paddingLeft: ".3rem" }}></i>
    </SearchInputStyle>
  );
};

export default Searchbar;
