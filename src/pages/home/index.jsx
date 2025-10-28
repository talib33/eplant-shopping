import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="overlay"></div>
      <div className="content">
        <div className="container">
          <div className="row align-items-center min-vh-100 g-5">
            <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-center">
              <h1 className="mb-2 mt-5 title">
                Welcome To <br /> Paradise Nursery
              </h1>
              <div className="line mb-3 mx-auto"></div>
              <p className="subtitle mb-5">Where Green Meets Serenity</p>
              <Link to="/plant">
               <button className="get-started-btn mx-auto">Get Started</button>
              </Link>
             
            </div>

            <div className="col-12 col-md-8 d-flex flex-column justify-content-end align-items-end pe-md-5">
              <p className="description mb-3 text-center">
                Welcome to Paradise Nursery, where green meets serenity.
              </p>

              <p className="description mb-3">
                At Paradise Nursery, we are passionate about bringing nature
                closer to you. Our mission is to provide a wide range of
                high-quality plants that not only enhance your surroundings but
                also contribute to a healthier lifestyle. From air-purifying
                plants to aromatic fragrant ones, we have something for
                everyone.
              </p>

              <p className="description mb-3">
                At Paradise Nursery, our team is dedicated to promoting a
                greener and healthier environment through responsible planting.
                We believe that every plant makes a difference — from nurturing
                air-purifying greens to cultivating vibrant blooms that bring
                life to every space. Together, we strive to make good planting a
                way of living, not just a hobby.
              </p>

              <p className="description">
                Our mission is to provide a wide range of high-quality plants
                that not only enhance your surroundings but also contribute to a
                healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
