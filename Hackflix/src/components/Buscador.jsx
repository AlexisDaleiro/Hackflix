import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Buscador({ setSearchTerm, isInBanner = false }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);

    if (value.trim() === "") {
      setSearchTerm("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setInput("");
    navigate(`/peliculas/busqueda?query=${encodeURIComponent(input)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex buscador-responsivo">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="form-control me-2 "
        placeholder="Buscar película..."
        style={{
          borderRadius: "8px",
          height: "50px",
          ...(isInBanner && { fontSize: "1.1rem" }),
        }}
      />
      <button
        type="submit"
        className="btn btn-danger"
        style={{
          height: "50px",
          width: "150px",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        Buscar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-backspace-fill ms-2 mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
}

export default Buscador;
