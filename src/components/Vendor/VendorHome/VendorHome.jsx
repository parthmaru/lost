import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import StatCards from "../StatCards/StatCards";

const VendorHome = () => {
  const [sidebarOpen, setSidebaropen] = useState(false);
  const [ssize] = useState(window.screen.width);

  const handleSidebar = () => {
    setSidebaropen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  useEffect(() => {
    ssize <= 940 ? setSidebaropen(false) : setSidebaropen(true);
  }, [ssize]);

  return (
    <div>
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <StatCards />
    </div>
  );
};

export default VendorHome;
