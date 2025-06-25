// MovieDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const fetchPelicula = async () => {
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
        setPelicula(response.data);
      } catch (error) {
        console.error("Error cargando detalles:", error);
      }
    };

    fetchPelicula();
  }, [id]);

  return (
    <div className="container-fluid text-white py-4">
      {pelicula && (
        <>
          <h2>{pelicula.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`}
            alt={pelicula.title}
            className="rounded mb-3"
          />
          <p>{pelicula.overview}</p>
          <p>⭐ {(pelicula.vote_average / 2).toFixed(0)}</p>
          <p>Estreno: {pelicula.release_date}</p>
        </>
      )}
    </div>
  );
}
