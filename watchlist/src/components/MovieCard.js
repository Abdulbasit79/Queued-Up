import React from "react";
import { MovieControls } from "./MovieControls";
import * as movieLinks from "./../movielinks.json"
import { Stars } from "./Stars";



export const MovieCard = ({ movie, type }) => {

  const link = movieLinks[movie.title] ? {href: movieLinks[movie.title]} : {};

  return (

    <div  className="movie-card">
      
      <div className="overlay" style={{pointerEvents:"none"}}></div>

    <a {...link}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
</a>
      <MovieControls type={type} movie={movie} />

      <Stars title={movie.title} type={type}/>
    </div>
  );
};