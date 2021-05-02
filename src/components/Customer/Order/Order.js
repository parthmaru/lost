import React from "react";
import { useSelector } from "react-redux";
import {
  OrderDateStyle,
  OrderMainSectionStyle,
  OrderTrackStyle,
  OrderBoxStyle,
} from "./Styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Navbar from "../Navbar/Navbar";

const Order = () => {
  const { products } = useSelector((state) => state.cartReducer);

  return (
    <>
      <Navbar />
      <OrderMainSectionStyle>
        {products.map((product) => (
          <OrderBoxStyle>
            <OrderTrackStyle>
              <p>OD1234578912345</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "1rem",
                }}
              >
                <LocationOnIcon color="primary" />
                Track
              </div>
            </OrderTrackStyle>
            <div className="grid-container" key={product.id}>
              <div className="productImg">
                <img src={product.image} alt="orderImg" />
              </div>
              <div className="productName">{product.name}</div>
              <div className="productPrice">₹{product.price}</div>
              <div className="productDate">Delievered on 15 Apr 2021</div>
            </div>
            <OrderDateStyle>
              <p>Order On 15 Apr 2021</p>
              <p>Order Total ₹{product.price}</p>
            </OrderDateStyle>
          </OrderBoxStyle>
        ))}
      </OrderMainSectionStyle>
    </>
  );
};

export default Order;
