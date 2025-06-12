import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Estrellas({ filtro, setFiltro }) {
  const handleRating = (rate) => {
    setFiltro(rate);
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-2">
      <h3 className="text-white">Filtrar por estrellas : </h3>{" "}
      <Rating onClick={handleRating} initialValue={filtro} size={30} />
    </div>
  );
}
export default Estrellas;
