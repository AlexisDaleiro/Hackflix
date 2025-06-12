import { useState } from "react";
import "./App.css";
import Api from "./components/ApiInicio";
import Buscador from "./components/Buscador";
import Estrellas from "./components/Estrellas";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Api />
    </>
  );
}

export default App;
