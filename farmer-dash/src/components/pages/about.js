import React from "react";
import Mainlayout from "../layout/Mainlayout.js";
import "./about.css";
import LatestUpdates from "../LatestUpdates.js";
import Footer from "../footer.js";
const About = () => {
  return (
    <div className="about-page">
      <Mainlayout />
   
      <div className="about-us-page">
        <section className="main-content">
          <div className="header">
            <h1>Water Harvesting System</h1>
            <h1>PMSKY WDS 2.0 WHSs</h1>
          </div>
          <div className="jumbotron">
            <div className="img-1">
              <img
                src="https://a-z-animals.com/media/2021/09/shutterstock_1136913710-1024x535.jpg"
                alt="Circle 1"
              />
            </div>
            <div className="img-2">
              <img
                src="https://i.ex-cdn.com/nongnghiep.vn/files/content/2023/08/24/2-175157_593.jpg"
                alt="Circle 2"
              />
            </div>
          </div>
          <div className="story-container">
            <div className="need-for-dx-container">
              <h2>ABOUT</h2>
              <p>
                <strong>PMSKY WDS 2.0 WHSs:- </strong>Building a Water-Secure
                Future for Rural India Water scarcity is a major challenge
                facing rural India. It limits agricultural productivity, hinders
                economic development, and negatively impacts the well-being of
                millions of people. To address this critical issue, the Pradhan
                Mantri Krishi Sinchayee Yojana (PMKSY) Watershed Development
                Scheme (WDS) 2.0 Water Harvesting Structure (WHSS) Scheme has
                been launched. This ambitious initiative envisions a future
                where all rural communities have access to clean and adequate
                water for their needs.
              </p>
              <h2>Vision</h2>
              <p>
                A future where all rural communities have access to clean and
                adequate water for their needs. This vision encompasses not only
                ensuring sufficient water for drinking and domestic use, but
                also for irrigation purposes, leading to increased agricultural
                productivity and improved food security.
              </p>
              <h2>Mission</h2>
              <p>
                To achieve water security in rural India through the
                implementation of sustainable water harvesting and management
                practices. This mission focuses on the construction and
                maintenance of various water harvesting structures like check
                dams, farm ponds, and continuous contour trenches, along with
                promoting soil and water conservation practices.
              </p>
              <h2>Key objectives</h2>
              <ul>
                <li>
                  <strong>Increased water availability:-</strong> By storing
                  rainwater, the scheme ensures a reliable source of water for
                  irrigation, drinking, and other purposes, even during dry
                  periods.
                </li>
                <li>
                  <strong>Improved water quality:- </strong> By reducing soil
                  erosion and sedimentation, the scheme helps to improve the
                  quality of water resources.
                </li>
                <li>
                  <strong>Enhanced agricultural productivity:</strong> Increased
                  water availability enables farmers to cultivate crops more
                  effectively and improve their yields.
                </li>
                <li>
                  <strong>Strengthened livelihoods: </strong>Improved
                  agricultural productivity and water availability lead to
                  increased income and improved well-being for rural
                  communities.
                </li>
                <li>
                  <strong>Promoted climate resilience:</strong> Water harvesting
                  structures act as buffers against droughts and floods, helping
                  communities to adapt to the impacts of climate change.
                </li>
                <li>
                  <strong>Empowered communities: </strong>The PMKSY WDS 2.0 WHSS
                  Scheme actively involves local communities in planning,
                  implementing, and maintaining water harvesting structures.
                  This fosters a sense of ownership and responsibility for water
                  resources.
                </li>
              </ul>
            </div>
            {/* Add more sections as needed */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
