import { useState } from "react";

function Buscador({ setSearchTerm, isInBanner = false }) {
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex "
      style={{ maxWidth: "720px", width: "100%", marginTop: "130px" }}
    >
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
      </button>
    </form>
  );
}

export default Buscador;
