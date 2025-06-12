import "./App.css";
import Api from "./components/ApiInicio";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
import { Angie } from "./components/Angie";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Angie />
      <Api />
    </>
  );
}

export default App;
