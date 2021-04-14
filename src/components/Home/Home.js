import React from "react";
import BestSellersList from "../BestSellersList/BestSellersList";
import CatagoryList from "../CatagoryList/CatagoryList";
import PopularList from "../PopularList/PopularList";
import RecommendedList from "../RecommendedList/RecommendedList";
import StoriesList from "../StoriesList/StoriesList";
import Carousal from "../Carousal/Carousal";
// import Footer from "../Footer/Footer";
import Fonsi from "../Fonsi/Fonsi";

const Home = () => {
  return (
    <>
      <CatagoryList />
      <Carousal />
      <RecommendedList />
      <PopularList />
      <BestSellersList />
      <StoriesList />
      {/* <Footer /> */}
      <Fonsi />
    </>
  );
};

export default Home;
