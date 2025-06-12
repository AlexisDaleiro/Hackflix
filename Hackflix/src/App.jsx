import "./App.css";
import Api from "./components/ApiInicio";
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
