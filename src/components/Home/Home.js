import React from "react";
import BestSellersList from "../BestSellersList/BestSellers";
import Carousal from "../Carousal/Carousal";
import CatagoryList from "../CatagoryList/CatagoryList";
import Navbar from "../Navbar/Navbar";
import PopularList from "../PopularList/PopularList";
import RecommendedList from "../RecommendedList/RecommendedList";
import StoriesList from "../StoriesList/StoriesList";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatagoryList />
      <Carousal />
      <RecommendedList />
      <PopularList />
      <BestSellersList />
      <StoriesList />
    </>
  );
};

export default Home;
