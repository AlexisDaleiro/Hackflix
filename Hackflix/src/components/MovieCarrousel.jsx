import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function MovieCarrousel({ searchTerm, children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const ordenarPorTitulo = () => {
    const ordenadas = [...peliculas].sort((a, b) =>
      ordenAscendente
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setPeliculas(ordenadas);
    setOrdenAscendente(!ordenAscendente);
    setAutoplay(false); // Detener autoplay al ordenar
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

      <div className="d-flex justify-content-between align-items-center px-5">
        <h2 className="text-white mb-3" style={{ transition: "0.3s ease" }}>
          Continuar viendo
        </h2>

        {/* Botón que alterna entre A → Z y Z → A */}
        <button
          onClick={ordenarPorTitulo}
          style={{
            backgroundColor: "#e50914",
            color: "white",
            padding: "6px 14px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {ordenAscendente ? "A → Z" : "Z → A"}
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div style={{ width: "90%" }}>
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={autoplay}
            autoplaySpeed={3000}
            arrows={true}
            infinite={true}
            style={{ width: "100%" }}
          >
            {peliculas.map((item) => (
              <div
                key={item.id}
                className="card-container"
                style={{
                  width: "220px",
                  height: "330px",
                  margin: "0 auto",
                  overflow: "hidden",
                  borderRadius: "12px",
                  textAlign: "center",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <Link 
                  to={`/peliculas/${item.id}`} 
                  className="text-decoration-none"
                  style={{
                    position: "relative",
                    zIndex: 10, 
                    display: "block",
                    height: "100%",
                  }}
                >
                <img
                  src={`/posters/${item.id}.jpg`}
                  alt={item.title}
                  style={{
                    width: "500px",
                    height: "300px",
                    borderRadius: "12px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  className="justify-content-center align-items-center"
                />
                
                <div
                  className="info-overlay p-2 justify-content-center"
                  style={{ width: "90%",
                  pointerEvents: "none",
                   }}
                >
                  <h5 className="text-white mt-2 justify-content-center">
                    {item.title}
                  </h5>
                  <p className="text-white justify-content-center">
                    {item.overview.length > 100
                      ? item.overview.slice(0, 100) + "..."
                      : item.overview}
                  </p>
                </div>
                 </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
