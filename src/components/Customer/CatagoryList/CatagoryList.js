import React from "react";
import Catagory from "../Catagory/Catagory";
import { CatagoryListStyle } from "./Styles";
import { catagories } from "../../../constants/catagories";
import { motion } from "framer-motion";

const CatagoryList = () => {
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
    <motion.div variants={variants} initial="hidden" animate="visible">
      <CatagoryListStyle>
        {catagories.map((item) => (
          <Catagory
            catagory_name={item.name}
            catagory_img={item.image}
            key={item.id}
          />
        ))}
      </CatagoryListStyle>
    </motion.div>
  );
};

export default CatagoryList;
