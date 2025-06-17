import "./App.css";
import Api from "./components/ApiInicio";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <Banner setSearchTerm={setSearchTerm} />
      <Api searchTerm={searchTerm}>
        {searchTerm && (
          <p className="text-white px-5">
            Resultados para: <strong>{searchTerm}</strong>
          </p>
        )}
      </Api>
    </>
  );
}

export default App;
