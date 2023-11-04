import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg";
import { Link } from "react-scroll";
import moveoutcover from "../assets/img/moveoutcover.mp4";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className="main">
      <video src={moveoutcover} autoPlay loop muted />
      <div className="content">
        <h1 className=" font-semibold text-17xl leading-tight  ">MOVEOUT</h1>
        <p className="para">One trip at a time</p>
      </div>
    </div>
  );
};

export default Home;
