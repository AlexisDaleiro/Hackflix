import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Api from "./components/ApiInicio";
import Buscador from "./components/Buscador";
import Estrellas from "./components/Estrellas";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
function App() {
	return (
		<>
			<div className="container-fluid bg-dark">
				<div>
					<Navbar />
					<Banner />
					<Estrellas />
					<Api />
				</div>
			</div>
		</>
	);
}

export default App;
