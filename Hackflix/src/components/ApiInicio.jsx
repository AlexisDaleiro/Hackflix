import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Estrellas from "./Estrellas";
import { LeftArrow } from "../assets/LeftArrow";
import { RightArrow } from "../assets/RightArrow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ApiInicio({ searchTerm, children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [filtro, setFiltro] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => setModal(false);
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const fetchPeliculas = async (pagina = 1, reset = false) => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      let url, params;

      if (searchTerm) {
        url = "https://api.themoviedb.org/3/search/movie";
        params = {
          api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
          query: searchTerm,
          page: pagina,
        };
      } else {
        let min = 0,
          max = 10;
        if (filtro === 1) {
          min = 0;
          max = 3.9;
        } else if (filtro === 2) {
          min = 4;
          max = 5.9;
        } else if (filtro === 3) {
          min = 6;
          max = 6.9;
        } else if (filtro === 4) {
          min = 7;
          max = 7.9;
        } else if (filtro === 5) {
          min = 8;
          max = 10;
        }

        url = "https://api.themoviedb.org/3/discover/movie";
        params = {
          include_adult: false,
          include_video: false,
          language: "en-US",
          sort_by: "popularity.desc",
          "vote_count.gte": 100,
          "vote_average.gte": min,
          "vote_average.lte": max,
          api_key: "51f5870eb2fb3938f2ca55d7c2326f86",
          page: pagina,
        };
      }

      const response = await axios.get(url, { params });
      const nuevas = response.data.results || [];

      if (reset) {
        setPeliculas(nuevas);
      } else {
        setPeliculas((prev) => [...prev, ...nuevas]);
      }

      setHasMore(pagina < response.data.total_pages);
    } catch (error) {
      console.error("Error al cargar películas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const reiniciarYBuscar = async () => {
      setPeliculas([]);
      setHasMore(true);
      setPage(1);
      await fetchPeliculas(1, true);
    };

    reiniciarYBuscar();
  }, [searchTerm, filtro]);

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      if (!el || !hasMore || isLoading) return;

      const scrollRight = el.scrollLeft + el.clientWidth;
      const maxScroll = el.scrollWidth;

      if (maxScroll - scrollRight < 300) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchPeliculas(nextPage);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [page, hasMore, isLoading]);

  return (
    <div className="container-fluid position-relative mt-4">
      {!searchTerm && <Estrellas filtro={filtro} setFiltro={setFiltro} />}
      {children}
      <h2
        className="text-white px-5 mb-3"
        style={{ transition: "opacity 0.3s ease", opacity: 1 }}
      >
        Más vistas de la plataforma
      </h2>
      <div className="scroll-container">
        <button onClick={scrollLeft} className="scroll-button left">
          <LeftArrow />
        </button>

        <div
          className="d-flex overflow-hidden flex-nowrap px-5"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {peliculas.length > 0 ? (
            peliculas
              .filter((item) => item.poster_path)
              .map((item) => (
                <div key={`${item.id}`} className="card-container me-3">
                  <Link
                    className="text-decoration-none text-white"
                    to={`/peliculas/${item.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title}
                      className="movie-img"
                    />

                    <div className="info-overlay p-2">
                      <h5>{item.title}</h5>
                      <div className="contenedor-boton">
                        <button className="vista-boton"
                          onClick={(e) => {
                            e.preventDefault(); // evita que haga scroll arriba
                            setModal(item.id);
                          }}
                        >
                          Vista previa
                        </button>
                      </div>
                    </div>
                  </Link>

                  <div style={{ textAlign: "center", marginTop: "5px", color: "white" }}>
                    ⭐ {(item.vote_average / 2).toFixed(0)}
                  </div>
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

      {isLoading && (
        <div className="text-white text-center my-3">
          <span className="spinner-border spinner-border-sm me-2" />
          Cargando más películas...
        </div>
      )}

      <div>
        <Modal show={modal !== false} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de la pelicula</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {peliculas.map(
              (item) =>
                item.id === modal && (
                  <div key={item.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.title}
                      className="movie-img mb-3 shadow d-inline"
                    />
                    <h5>{item.title}</h5>
                    <p>{item.overview}</p>
                    <p>⭐ {(item.vote_average / 2).toFixed(0)}</p>
                  </div>
                )
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
