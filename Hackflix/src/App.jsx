import "./App.css";
import Api from "./components/ApiInicio";

import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
import { useState } from "react";
import Footer from "./components/Footer";
import Thriller from "./components/Triller";
import Animacion from "./components/Animacion";
import PelisTv from "./components/PelisTv";
import MovieLengua from "./components/MovieLengua";
import MovieCarrousel from "./components/MovieCarrousel";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <Banner setSearchTerm={setSearchTerm} />
<MovieCarrousel></MovieCarrousel>
      <Api searchTerm={searchTerm}>
        {searchTerm && (
          <p className="text-white px-5 fs-3 mt-2 mb-4">
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
