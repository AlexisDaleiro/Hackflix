import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Estrellas({ filtro, setFiltro }) {
  const handleRating = (rate) => {
    setFiltro(rate);
  };
  const resetRating = (rate) => {
    setFiltro((prevFiltro) => (prevFiltro === rate ? 0 : rate));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-2 mt-4 mb-4 gap-1">
      <h5 className="text-white">TOP SEGÚN CALIFICACIÓN</h5>
      <div className="">
        <Rating onClick={handleRating} initialValue={filtro} size={30} />
        <button className="btn btn-dark rounded-5 ms-3" onClick={resetRating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="white"
            className="d-flex justify-content-center"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Estrellas;
