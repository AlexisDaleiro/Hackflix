import React from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav class="navbar">
			<div className="navbar-brand">
				<img src={logo} alt="" width={"175px"} />
			</div>
			<button class="texto-solo">
				INICIAR SESIÓN <FaUser />
			</button>
		</nav>
	);
};
export default Navbar;
