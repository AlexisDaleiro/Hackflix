import React from "react";
import hero from "../assets/hero.png";
import Buscador from "./Buscador";

const Banner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center banner"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "500px",
        borderRadius: "20px",
      }}
    >
      <Buscador />
    </div>
  );
};

export default Banner;
