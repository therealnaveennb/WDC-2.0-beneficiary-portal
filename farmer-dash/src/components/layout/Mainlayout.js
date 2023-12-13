import React from "react";
import Navbar from "../Navbar.js";

function Mainlayout({children}) {
  return (
    <div>
      <Navbar/>
      <div>{children}</div>
      
    </div>
  );
}

export default Mainlayout;
