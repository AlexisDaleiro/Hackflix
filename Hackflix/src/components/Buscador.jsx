import { useState } from "react";

function Buscador({ setSearchTerm, isInBanner = false }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex"
      style={{ maxWidth: "500px", width: "100%" }}
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="form-control me-2"
        placeholder="Buscar película..."
        style={{
          borderRadius: "8px",
          height: "40px",
          ...(isInBanner && { fontSize: "1.1rem" }),
        }}
      />
      <button
        type="submit"
        className="btn btn-danger"
        style={{
          height: "40px",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      >
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
