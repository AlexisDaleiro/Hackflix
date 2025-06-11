import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand ">
        <img src={logo} alt="" />
      </div>

      <div>
        {" "}
        <a href="/usuario">INICIAR SESIÓN</a>
      </div>
    </nav>
  );
};
export default Navbar;
