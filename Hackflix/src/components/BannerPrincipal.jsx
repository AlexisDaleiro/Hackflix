import React from "react";
import hero from "../assets/hero.png";
import Buscador from "./Buscador";

const Banner = ({ setSearchTerm }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center banner"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
        borderRadius: "20px",
        position: "relative",
        color: "white",
        flexDirection: "column",
      }}
    >
      <div className="buscadorBanner">
        <Buscador />
      </div>
    </div>
  );
};

export default Banner;
