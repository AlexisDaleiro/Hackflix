import axios from "axios";

import { useEffect, useState } from "react";

function Buscador() {
  const [buscador, setbuscador] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
  });
  useEffect(() => {
    const getBuscador = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=51f5870eb2fb3938f2ca55d7c2326f86&query=
${formData.title}`
      );
      setbuscador(response.data);
    };
    getBuscador();
  }, [formData.title]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control me-2 my-1"
          role="Search"
          aria-label="Search"
          style={{
            width: "300px",
          }}
        />
        <button
          className="btn btn-danger mt-1"
          type="submit"
          style={{
            color: "white",
            height: "39px",
            borderColor: "black",
          }}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscador;
