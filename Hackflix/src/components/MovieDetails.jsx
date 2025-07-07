import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Menu";
import { reseñasPersonalizadas } from "../Data/ReseñasPersonalizadas";

export default function MovieDetails() {
  const { id } = useParams();
  const [peliculas, setPeliculas] = useState(null);
  const [director, setDirector] = useState(null);
  const [actores, setActores] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
              language: "es-ES",
            },
          }
        );
        setPeliculas(response.data);

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
              language: "es-ES",
            },
          }
        );

        const directorInfo = creditsResponse.data.crew.find(
          (member) => member.job === "Director"
        );
        if (directorInfo) setDirector(directorInfo.name);
        const topActores = creditsResponse.data.cast.slice(0, 5);
        setActores(topActores);
      } catch (error) {
        console.error("Error cargando detalles:", error);
      }
    };

    fetchPeliculas();
  }, [id]);

  const obtenerSinopsis = () => {
    return (
      reseñasPersonalizadas[id] ||
      peliculas?.overview ||
      "Sinopsis no disponible"
    );
  };

  const backgroundStyle = peliculas?.backdrop_path
    ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${peliculas.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        filter: "blur(8px)",
        opacity: "0.3",
      }
    : {};

  const fallbackStyle = !peliculas?.backdrop_path
    ? {
        background: "linear-gradient(135deg, #1a1a1a, #2d2d2d, #1a1a1a)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }
    : {};

  return (
    <div
      className="container-fluid text-white py-4 pt-0 position-relative"
      style={{ minHeight: "100vh", zIndex: 1 }}
    >
      <div
        style={peliculas?.backdrop_path ? backgroundStyle : fallbackStyle}
      ></div>

      <Navbar />

      <div
        className="container-fluid text-white ms-1 py-4 pb-3 row position-relative"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      >
        {peliculas && (
          <>
            <div className="d-flex col-md-4 justify-content-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${peliculas.poster_path}`}
                alt={peliculas.title}
                className="rounded mb-3 justify-content-center"
                style={{
                  maxWidth: "450px",
                  objectFit: "cover",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                }}
              />
            </div>

            <div className="col-md-8 d-flex flex-column justify-content-between">
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  background:
                    "linear-gradient(135deg,rgb(185, 53, 53),rgb(143, 120, 27))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "1.5rem",
                }}
              >
                {peliculas.title}
              </h2>

              <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                <p
                  style={{
                    color: "#f8f9fa",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span
                    style={{
                      color: "#ffc107",
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Estreno:
                  </span>{" "}
                  {peliculas.release_date}
                </p>

                <p
                  style={{
                    color: "#f8f9fa",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <span
                    style={{
                      color: "#ffc107",
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    País:
                  </span>{" "}
                  {peliculas.production_countries
                    ?.map((pais) => pais.name)
                    .join(", ") || "No disponible"}
                </p>

                {director && (
                  <p
                    style={{
                      color: "#f8f9fa",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <span
                      style={{
                        color: "#ffc107",
                        fontWeight: "bold",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Director:
                    </span>{" "}
                    {director}
                  </p>
                )}

                {actores.length > 0 && (
                  <p
                    style={{
                      color: "#f8f9fa",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <span
                      style={{
                        color: "#ffc107",
                        fontWeight: "bold",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Actores:
                    </span>{" "}
                    {actores.map((actor) => actor.name).join(", ")}
                  </p>
                )}

                <p
                  style={{
                    whiteSpace: "pre-line",
                    color: "#e9ecef",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    fontSize: "1.05rem",
                    lineHeight: "1.6",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {obtenerSinopsis()}
                </p>

                <p
                  style={{
                    color: "#f8f9fa",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    fontSize: "1.2rem",
                  }}
                >
                  <span
                    style={{
                      color: "#ffc107",
                      fontWeight: "bold",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    Rating:
                  </span>
                  <span
                    style={{
                      color: "#ffd700",
                      fontSize: "1.3rem",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    ⭐ {(peliculas.vote_average / 2).toFixed(0)}
                  </span>
                </p>
              </div>

              <div className="d-flex justify-content-end mt-auto mb-2">
                <Link
                  className="btn btn-danger"
                  to="/"
                  style={{
                    background: "linear-gradient(135deg, #dc3545, #c82333)",
                    border: "none",
                    padding: "12px 24px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(220, 53, 69, 0.4)",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(220, 53, 69, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(220, 53, 69, 0.4)";
                  }}
                >
                  Volver a la página de inicio
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
