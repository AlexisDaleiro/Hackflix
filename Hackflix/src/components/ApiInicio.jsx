import axios from "axios";
import { useState, useEffect } from "react";

export default function (props) {
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const getPelicula = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=51f5870eb2fb3938f2ca55d7c2326f86`
      );
      setPelicula(response.data);
      console.log(response.data);
    };
    getPelicula();
  }, []);
  return (
    pelicula && (
<<<<<<< HEAD
      <div className="d-flex overflow-auto flex-nowrap">
=======
      <div className="row ">
>>>>>>> 4e6fe901b8be8eee973e06417392151576dc8fe5
        {pelicula.results.map((item) => (
          <div key={item.id} className="me-3">
            <div className="m-1">
<<<<<<< HEAD
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
=======
              <a href="">
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.title}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    width: "200px",
                  }}
                />
              </a>
>>>>>>> 4e6fe901b8be8eee973e06417392151576dc8fe5
            </div>
          </div>
        ))}
      </div>
    )
  );
}
