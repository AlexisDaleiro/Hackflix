import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";

export default function MovieLengua({ searchTerm, children }) {
  const [peliculas, setPeliculas] = useState([]);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = [637, 152601, 37165, 13];

    const fetchPeliculas = async () => {
      const promises = ids.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=51f5870eb2fb3938f2ca55d7c2326f86`
        )
      );

      const results = await Promise.all(promises);
      setPeliculas(results.map((res) => res.data));
    };

    fetchPeliculas();
  }, []);

  return (
    <div className="container-fluid position-relative mt-4">
      {children}

      <h2 className="text-white px-5 mb-3" style={{ transition: "0.3s ease" }}>
        Continuar viendo
      </h2>

      <div className="scroll-container">
        <button onClick={scrollLeft} className="scroll-button left"></button>

        <div
          className="d-flex overflow-hidden flex-nowrap px-5"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
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

        <button onClick={scrollRight} className="scroll-button right"></button>
      </div>
    </div>
  );
}
