import React from "react";
import Mainlayout from "../layout/Mainlayout";
import LatestUpdates from "../LatestUpdates";
import Image from "../assets/image2.jpg";
import "./home.css";
import Footer from "../footer";
function Home() {
  return (
    <div className="HomePage">
     
      <Mainlayout />
     <div className="image_column">
      <img src={Image} width={"100%"} height={"auto"}/>
      <LatestUpdates /></div>
      <Footer/>
    </div>
  );
}

export default Home;
