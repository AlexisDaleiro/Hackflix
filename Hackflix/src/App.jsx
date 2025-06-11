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
<<<<<<< HEAD
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
=======
  return (
    <>
      <div className="container-fluid p-0">
        <div>
          <Navbar/>
          <Buscador />
          <Estrellas />
          <Api />
        </div>
      </div>
    </>
  );
>>>>>>> 0090d3f4fcd6be77032ec56cf866157005d6a843
}

export default App;
