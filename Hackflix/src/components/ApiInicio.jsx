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
      <div className="row ">
        {pelicula.results.map((item) => (
          <div key={item.id} className="col-md-2">
            <div className="m-1">
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
            </div>
          </div>
        ))}
      </div>
    )
  );
}
