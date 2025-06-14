import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Estrellas from "../components/Estrellas";
import { RightArrow } from "../assets/RightArrow";
import { LeftArrow } from "../assets/LeftArrow";

export default function ApiInicio() {
  const [pelicula, setPelicula] = useState(null);
  const [filtro, setFiltro] = useState(0);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getPeliculas = async () => {
      const voteAverage = filtro * 2;

      const params = {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
        "vote_count.gte": "100",
        "vote_average.gte": filtro > 0 ? voteAverage - 2 : 0,
        "vote_average.lte": filtro > 0 ? voteAverage : 10,
        api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
      };

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          { params }
        );
        setPelicula(response.data);
      } catch (error) {
        console.error("Error al obtener películas:", error);
      }
    };

    getPeliculas();
  }, [filtro]);

  return (
    pelicula && (
      <div className="container-fluid ">
        <Estrellas filtro={filtro} setFiltro={setFiltro} />
        <div className="row">
          <div className="col-1 ">
            <button
              className="mt-5"
              onClick={scrollLeft}
              style={{ background: "none", border: "none" }}
            >
              <LeftArrow />
            </button>
          </div>

          <div
            className="d-flex overflow-hidden flex-nowrap col-10"
            ref={scrollRef}
          >
            {pelicula.results
              .filter((item) => item.poster_path !== null)
              .map((item) => (
                <div key={item.id} className="me-3">
                  <div className="m-1">
                    <a href="#" className="text-decoration-none text-white">
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
                        ⭐ {item.vote_average.toFixed(1)}
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-1 ">
            <button
              onClick={scrollRight}
              style={{ background: "none", border: "none" }}
              className="mt-5"
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    )
  );
}
