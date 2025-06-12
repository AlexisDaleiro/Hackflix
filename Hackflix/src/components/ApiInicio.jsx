import axios from "axios";
import { useState, useEffect } from "react";
import Estrellas from "../components/Estrellas";

export default function ApiInicio() {
  const [pelicula, setPelicula] = useState(null);
  const [filtro, setFiltro] = useState(0);

  useEffect(() => {
    const getPeliculas = async () => {
      let url = "";

      if (filtro === 0) {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=51f5870eb2fb3938f2ca55d7c2326f86`;
      } else {
        const voteAverage = filtro * 2;
        url = `https://api.themoviedb.org/3/discover/movie?api_key=51f5870eb2fb3938f2ca55d7c2326f86&vote_average.gte=${voteAverage}`;
      }

      const response = await axios.get(url);
      setPelicula(response.data);
    };

    getPeliculas();
  }, [filtro]);

  return (
    pelicula && (
      <div className="container py-3">
        <Estrellas filtro={filtro} setFiltro={setFiltro} />

        <div className="d-flex overflow-auto flex-nowrap">
          {pelicula.results
            .filter((item) => item.poster_path !== null)
            .map((item) => (
              <div key={item.id} className="me-3">
                <div className="m-1">
                  <a href="" className="text-decoration-none text-white">
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
                      ⭐ {(item.vote_average / 2).toFixed(0)}
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
