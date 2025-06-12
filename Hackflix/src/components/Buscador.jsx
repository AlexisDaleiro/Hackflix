import { useState } from "react";

function Buscador() {
  const [formData, setFormData] = useState({
    title: "",
  });

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
