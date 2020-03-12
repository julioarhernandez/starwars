import React from "react";
import logo from "../../images/SW.svg";
import "./Home.scss";

const HomeView = () => {

  return (
    <div className="Home">
      <div className="Home_image">
        <img src={logo} className="Home_logo" alt="SW logo"/>
      </div>
        <div className="Home_text">
            The API Awakens
        </div>
    </div>
  );
};

export default HomeView;
