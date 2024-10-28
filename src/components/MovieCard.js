import React from "react";
import { MOVIE_SRC_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 hover:-translate-y-2">
      <img src={MOVIE_SRC_URL + posterPath} alt="Movie Card Image" />
    </div>
  );
};

export default MovieCard;
