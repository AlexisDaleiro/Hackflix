// MovieDetails.jsx
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
    return reseñasPersonalizadas[id] || peliculas.overview;
  };
  // const obtenerResenia = ()  => {
  //   return reseñasPersonalizadas[id] ;
  // };
  
  return (
    <div className="container-fluid text-white py-4 pt-0">
      <Navbar />
      <div className="container-fluid text-white ms-1 py-4 pb-3 row bg-secondary bg-opacity-10 rounded-4">
        {peliculas && (
          <>
            <div className="d-flex col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w400${peliculas.poster_path}`}
                alt={peliculas.title}
                className="rounded mb-3 justify-content-center"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-between">
              <h2 ><b>{peliculas.title}</b></h2>
              <p><b>Estreno:</b> {peliculas.release_date}</p>
              <p>
                <b>País:</b>{" "}
                {peliculas.production_countries
                  .map((pais) => pais.name)
                  .join(", ")}
              </p>
              {director && <p><b>Director:</b> {director}</p>}
              {actores.length > 0 && (
                <p><b>Actores:</b> {actores.map((actor) => actor.name).join(", ")}</p>
              )}
              <p style={{ whiteSpace: 'pre-line' }}> {obtenerSinopsis()}</p>
             {/* <p>{obtenerResenia()}</p> */}

              <p><b>Rating:</b>⭐ {(peliculas.vote_average / 2).toFixed(0)}</p>
              <div className="d-flex justify-content-end mt-auto mb-2">
                <Link className="btn btn-danger" to="/">
                  Volver a la pagina de inicio
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
