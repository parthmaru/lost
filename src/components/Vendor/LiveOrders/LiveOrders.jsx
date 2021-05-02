import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
// import axios from "axios";
import "./LiveOrders.css";
// import { liveordercol } from "../Data/liveordercol";
import { useSelector } from "react-redux";

function LiveOrders() {
  const { products } = useSelector((state) => state.cartReducer);
  const [liveorderdata, setLiveorderdata] = useState([]);

  useEffect(() => {
    setLiveorderdata(products);
  }, [products]);
  // console.log(products);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       axios.get("http://localhost:3333/liveorders").then((res) => {
  //         console.log("res", res.data);
  //         setLiveorderdata(res.data);
  //       });
  //     }, 10000);
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div className="liveorder_con">
      <div className="liveoredr_head">Live Orders</div>
      <div className="liveorder_table">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Quantity</TableCell>
                {/* <TableCell>Product</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Bill Status</TableCell>
                <TableCell>Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {liveorderdata.map((orderData, id) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{orderData.id}</TableCell>
                    <TableCell>{orderData.name}</TableCell>
                    <TableCell>{orderData.price}</TableCell>
                    <TableCell>{orderData.quantity}</TableCell>
                    {/* <TableCell>{orderData.product}</TableCell>
                    <TableCell>{orderData.category}</TableCell>
                    <TableCell>{orderData.amount}</TableCell>
                    <TableCell>{orderData.bill_status}</TableCell> */}
                    <TableCell>
                      <button className="confirmbtn odrbtn">Confirm</button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default LiveOrders;
