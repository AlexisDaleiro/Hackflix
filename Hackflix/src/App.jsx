import "./App.css";
import Api from "./components/ApiInicio";
import Navbar from "./components/Menu";
import Banner from "./components/BannerPrincipal";
import componentenuevo from "./components/componentenuevo";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <componentenuevo />
      <Api />
    </>
  );
}

export default App;
