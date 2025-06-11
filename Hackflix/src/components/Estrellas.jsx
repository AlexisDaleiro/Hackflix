import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Estrellas() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} initialValue={rating} />
    </div>
  );
}
export default Estrellas;
