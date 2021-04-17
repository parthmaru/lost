import React, { useEffect } from "react";
import {
  PopularContainerStyle,
  PopularImgStyle,
  PopularButtonStyle,
  PopularDetailStyle,
} from "./Styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Popular = ({ p_id, p_name, p_img, p_discount, p_category, p_price }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init(500);
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: p_id,
        name: p_name,
        price: p_price,
        image: p_img,
      })
    );
  };

  return (
    <div data-aos="zoom-out">
      <PopularContainerStyle>
        <PopularImgStyle>
          <img src={p_img} alt="popuar" />
        </PopularImgStyle>
        <PopularDetailStyle>
          <p style={{ fontSize: ".8rem", fontFamily: "Open Sans" }}>{p_name}</p>
          <p style={{ fontSize: ".8rem", color: "green", fontWeight: 100 }}>
            Upto {p_discount}% Off
          </p>
          <p
            style={{ fontSize: ".8rem", color: "gray", fontWeight: "lighter" }}
          >
            {p_category}
          </p>
        </PopularDetailStyle>
        <PopularButtonStyle>
          <button onClick={handleAddToCart}>Buy Now</button>
        </PopularButtonStyle>
      </PopularContainerStyle>
    </div>
  );
};

export default Popular;
