import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";

export default function MovieCarrousel({ searchTerm, children }) {
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
      <div className="d-flex justify-content-center">
        <div //style={{width: "300px"}}>
        >
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={false}
            autoplaySpeed={4000}
            arrows={true}
            infinite={true}
            style={{ width: "300px" }}
          >
            {peliculas.map((item) => (
              <div
                key={item.id}
                className="card-container me-3 "
                style={{ textAlign: "center" }}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.title}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      // objectFit: "cover",
                    }}
                    className="justify-content-center align-items-center"
                  />
                  <div
                    className="info-overlay p-2 justify-content-center"
                    style={{ width: "100%" }}
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
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
