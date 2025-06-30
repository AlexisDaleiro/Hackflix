import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Menu";
import InfiniteScroll from "react-infinite-scroll-component";
import Buscador from "../Buscador";

const truncateText = (text, maxWords) => {
  if (!text) return "Descripción no disponible";
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const getYear = (date) => {
  if (!date) return "N/A";
  return new Date(date).getFullYear();
};

const renderStars = (rating) => {
  if (!rating) return "☆☆☆☆☆";
  const stars = Math.round(rating / 2);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
};

export default function PaginaBusqueda() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchPeliculas = async (pagina = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
            query,
            language: "es-ES",
            page: pagina,
            include_adult: false,
            sort_by: "popularity.desc",
            include_video: false,
          },
        }
      );

      const nuevas = response.data.results || [];

      setPeliculas((prev) => (pagina === 1 ? nuevas : [...prev, ...nuevas]));
      setHasMore(pagina < response.data.total_pages);
      setPage(pagina + 1);
    } catch (error) {
      console.error("Error al buscar películas:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return; // 🛑 No hagas nada si no hay búsqueda

    setPeliculas([]);
    setPage(1);
    setHasMore(true);
    fetchPeliculas(1); // 👉 ahora pasamos la página manualmente
  }, [query]);

  return (
    <div className="container-fluid">
      <Navbar />
      {query && (
        <div className="text-center text-light mb-4">
          <h1>Resultados de la búsqueda para: "{query}"</h1>
          <h3 className="mb-3">🔍 O quieres buscar otra pelicula?</h3>
          <div className="d-flex justify-content-center mb-3">
            <Buscador />
          </div>
        </div>
      )}
      <div className="container mt-4">
        {query && loading && peliculas.length === 0 && (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}

        {!query && (
          <div className="text-center my-5 text-white">
            <h3>🔍 Empezá buscando una película</h3>
            <p>
              Usá la barra de búsqueda para encontrar tus títulos favoritos.
            </p>
            <div className="container d-flex justify-content-center ">
              <Buscador />
            </div>
          </div>
        )}

        {!loading && peliculas.length === 0 && query && (
          <div className="text-center my-5">
            <h3 className="text-muted">No se encontraron resultados</h3>
            <p>Intenta con otros términos de búsqueda</p>
          </div>
        )}

        {query && peliculas.length > 0 && (
          <InfiniteScroll
            dataLength={peliculas.length}
            next={() => fetchPeliculas(page)}
            hasMore={hasMore}
            loader={<h4 className="text-center text-light">Cargando más...</h4>}
            endMessage={
              <p className="text-center text-muted">No hay más resultados.</p>
            }
          >
            <div className="row">
              {peliculas.map((pelicula) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={pelicula.id}
                >
                  <Link
                    to={`/peliculas/${pelicula.id}`}
                    className="text-decoration-none"
                  >
                    <div className="card movie-card dark-theme h-100 shadow-sm">
                      <img
                        src={
                          pelicula.poster_path
                            ? `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
                            : "https://via.placeholder.com/300x450/cccccc/666666?text=Sin+Imagen"
                        }
                        className="card-img-top"
                        alt={pelicula.title}
                        loading="lazy"
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{pelicula.title}</h5>
                        <p className="card-text flex-grow-1">
                          {truncateText(pelicula.overview, 15)}
                        </p>
                        <div className="card-footer bg-transparent border-0 px-0 mt-auto">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <span className="text-warning me-2">
                                {renderStars(pelicula.vote_average)}
                              </span>
                              <small className="movie-rating">
                                {pelicula.vote_average
                                  ? pelicula.vote_average.toFixed(1)
                                  : "N/A"}
                              </small>
                            </div>
                            <small className="movie-year fw-semibold">
                              {getYear(pelicula.release_date)}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
