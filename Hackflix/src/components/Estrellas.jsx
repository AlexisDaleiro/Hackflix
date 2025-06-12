import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Estrellas({ filtro, setFiltro }) {
	const handleRating = (rate) => {
		setFiltro(rate);
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center my-2 mt-4 mb-5 gap-1">
			<h5 className="text-white">TOP SEGÚN CALIFICACIÓN</h5>
			<Rating onClick={handleRating} initialValue={filtro} size={30} />
		</div>
	);
}
export default Estrellas;
