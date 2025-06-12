import React from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container-fluid">
				<div className="navbar-brand">
					<img src={logo} alt="" width={"160px"} />
				</div>
				<button className="texto-solo">
					INICIAR SESIÓN <FaUser />
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
