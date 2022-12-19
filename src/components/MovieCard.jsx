import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ film }) => {
  return (
    <div>
      <Link to={`/trailer/${film.id}`}>
        <div className="movie-card">
          <StarRating rating={film.rating} />
          <img src={film.image} alt="" />
          <h3> {film.name} </h3>
          <p> {film.date} </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
