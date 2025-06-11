import React from "react";
<<<<<<< HEAD
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
=======
import logo from "../assets/logo.png"
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return(

<nav class="navbar">
    
    <div className="navbar-brand">
        <img src={logo} alt="" width={"175px"} />
      </div>
<button class="texto-solo">INICIAR SESIÓN <FaUser /></button>
    
    </nav>
    )
>>>>>>> 0090d3f4fcd6be77032ec56cf866157005d6a843
};
export default Navbar;
