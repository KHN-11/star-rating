import { useState } from "react";
import StarRating from "../StarRating";

export default function Test() {
  const [movieRating, setMovieRating] = useState();
  return (
    <>
      <StarRating onSetRating={setMovieRating} color="#be4bdb" />
      <p>This movie was rated {movieRating}</p>
    </>
  );
}
