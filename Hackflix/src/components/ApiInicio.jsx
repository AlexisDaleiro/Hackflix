import axios from "axios";
import { useState, useEffect } from "react";

export default function (props) {
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const getPersonaje = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=Star%20Wars&api_key=51f5870eb2fb3938f2ca55d7c2326f86`
      );
      setPersonaje(response.data);
      console.log(response.data);
    };
    getPersonaje();
  }, []);
  return (
    personaje && (
      <div className="row justify-content-center">
        {personaje.results.map((item) => (
          <div key={item.id} className="col-md-2">
            <div className="m-1">
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title}
                style={{
                  height: "300px",
                  objectFit: "cover",
                  width: "200px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  );
}
