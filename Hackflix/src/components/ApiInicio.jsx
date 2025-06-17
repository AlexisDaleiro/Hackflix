import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Estrellas from "./Estrellas";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";

export default function ApiInicio({ searchTerm, children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [filtro, setFiltro] = useState(0);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        let url, params;

        if (searchTerm) {
          url = "https://api.themoviedb.org/3/search/movie";
          params = {
            api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
            query: searchTerm,
          };
        } else {
          url = "https://api.themoviedb.org/3/discover/movie";
          const voteAverage = filtro * 2;
          params = {
            include_adult: false,
            include_video: false,
            language: "en-US",
            page: 1,
            sort_by: "popularity.desc",
            "vote_count.gte": 100,
            "vote_average.gte": filtro > 0 ? voteAverage - 2 : 0,
            "vote_average.lte": filtro > 0 ? voteAverage : 10,
            api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
          };
        }

        const response = await axios.get(url, { params });
        setPeliculas(response.data.results || []);
      } catch (error) {
        console.error("Error al cargar películas:", error);
      }
    };

    fetchPeliculas();
  }, [searchTerm, filtro]);

  return (
    <div className="container-fluid position-relative mt-4">
      {!searchTerm && <Estrellas filtro={filtro} setFiltro={setFiltro} />}
      {children}

      <div className="scroll-container">
        <button onClick={scrollLeft} className="scroll-button left">
          <LeftArrow />
        </button>

        <div
          className="d-flex overflow-hidden flex-nowrap px-5"
          ref={scrollRef}
        >
          {peliculas.length > 0 ? (
            peliculas
              .filter((item) => item.poster_path)
              .map((item) => (
                <div key={item.id} className="card-container me-3">
                  <a href="#" className="text-decoration-none text-white">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title}
                      className="movie-img"
                    />
                    <div className="info-overlay p-2">
                      <h5>{item.title}</h5>
                      <p>
                        {item.overview.length > 100
                          ? item.overview.slice(0, 100) + "..."
                          : item.overview}
                      </p>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "5px" }}>
                      ⭐ {(item.vote_average / 2).toFixed(0)}
                    </div>
                  </a>
                </div>
              ))
          ) : (
            <p className="text-white px-5">No se encontraron resultados.</p>
          )}
        </div>

        <button onClick={scrollRight} className="scroll-button right">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
