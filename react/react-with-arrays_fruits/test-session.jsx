// Movies.jsx

import React from "react";
import "./Movies.css";
import "../MovieCard/MovieCard.css";
import MovieCard from "../MovieCard/MovieCard.jsx";
import { movies } from "../../lib/movies.js";

export default function Movies() {
  return (
    <main className="movies">
      <h1 className="movies__title">Some great movies</h1>
      <ul>
        {movies.map(
          ({ title, imdbRating, director, url, description, id }, index) => {
            return (
              <li key={id}>
                <MovieCard
                  title={title}
                  imdbRating={imdbRating}
                  director={director}
                  description={description}
                  url={url}
                />
              </li>
            );
          },
        )}
      </ul>
    </main>
  );
}


//MovieCard.jsx

export default function MovieCard({
  title,
  imdbRating,
  director,
  url,
  description,
}) {
  //   const { title, imdbRating, director, url, description } = movie;
  return (
    <section className="movie-card">
      <h2 className="movie-card__title">
        {title}
        <span className="movie-card__rating">{imdbRating} IMDb</span>
      </h2>
      <span className="movie-card__director">by {director}</span>
      <img className="movie-card__image" src={url} alt={title}></img>
      <div className="movie-card__content">
        <p className="movie-card__description">{description}</p>
      </div>
    </section>
  );
}