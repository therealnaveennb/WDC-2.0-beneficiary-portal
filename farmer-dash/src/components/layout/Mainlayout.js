import React from "react";
import Navbar from "../Navbar";

function Mainlayout({children}) {
  return (
    <div>
      <Navbar/>
      <div>{children}</div>
    </div>
  );
}

export default Mainlayout;
