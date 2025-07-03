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
      <Banner />
      <MovieCarrousel></MovieCarrousel>
      <Api></Api>
      <Thriller></Thriller>
      <Animacion></Animacion>
      <PelisTv></PelisTv>
      <Footer />
    </>
  );
}

export default App;
