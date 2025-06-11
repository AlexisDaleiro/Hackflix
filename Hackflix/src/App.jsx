import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Api from "./components/ApiInicio";
import Buscador from "./components/Buscador";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <Buscador />
          <Api />
        </div>
      </div>
    </>
  );
}

export default App;
