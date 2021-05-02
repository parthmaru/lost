import React from "react";
import BestSellersList from "../BestSellersList/BestSellersList";
import CatagoryList from "../CatagoryList/CatagoryList";
import PopularList from "../PopularList/PopularList";
import RecommendedList from "../RecommendedList/RecommendedList";
import StoriesList from "../StoriesList/StoriesList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ImgSlider from "../ImgSlider/ImgSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatagoryList />
      <ImgSlider />
      <RecommendedList />
      <PopularList />
      <BestSellersList />
      <StoriesList />
      <Footer />
    </>
  );
};

export default Home;
