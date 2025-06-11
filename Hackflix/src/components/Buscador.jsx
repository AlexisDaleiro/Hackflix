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
          className="form-control me-5 my-1"
          role="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscador;
