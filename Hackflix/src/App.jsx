import "./App.css";
import Api from "./components/ApiInicio";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
import { useState } from "react";
import Footer from "./components/Footer";
import Thriller from "./components/Triller";
import Animacion from "./components/Animacion";
import PelisTv from "./components/PelisTv";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <Banner setSearchTerm={setSearchTerm} />
      <Api searchTerm={searchTerm}>
        {searchTerm && (
          <p className="text-white px-5 fs-3 mt-3 mb-5">
            Resultados para: <strong>{searchTerm}</strong>
          </p>
        )}
      </Api>
      <Thriller></Thriller>
      <Animacion></Animacion>
      <PelisTv></PelisTv>
      <Footer />
    </>
  );
}

export default App;
