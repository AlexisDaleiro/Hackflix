import axios from "axios";
import { useState, useEffect } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Rating } from "react-simple-star-rating";
import Estrellas from "./Estrellas";

export default function ApiInicio() {
  const [pelicula, setPelicula] = useState(null);
  const [filtro, setFiltro] = useState(0);

  useEffect(() => {
    const getPelicula = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=51f5870eb2fb3938f2ca55d7c2326f86`
      );
      setPelicula(response.data);
      console.log(response.data);
    };
    getPelicula();
  }, []);

  return (
    pelicula && (
      <div>
        <div className="mb-4">
          <Estrellas filtro={filtro} setFiltro={setFiltro} />
        </div>
        <div className="d-flex overflow-auto flex-nowrap">
          {pelicula.results
            .filter((item) => item.vote_average / 2 >= filtro)
            .map((item) => (
              <div key={item.id} className="me-3">
                <div className="m-1">
                  <a href="">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "200px",
                      }}
                      className="rounded-3"
                    />
                    <div style={{ textAlign: "center", marginTop: "5px" }}>
                      ⭐ {(item.vote_average / 2).toFixed(1)}
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  );
}
