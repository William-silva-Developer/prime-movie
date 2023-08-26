import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";

import "./CardFilm.css";
import { Link } from "react-router-dom";

function CardFilms() {
  const films = useSelector(
    (state: RootState) => state.films.results.ObjctFilms
  );

  return (
    <section className=" card">
      {films.map((item) => {
        return (
          <article className="cards-films" key={item.id}>
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.title}
            />

            <div>
              <p>
                Data de lançamento:{" "}
                {item?.release_date.split("-").reverse().join("/")}
              </p>
              <h3>{item?.title}</h3>
            </div>
            <Link className="button-datails" to={`/filme/${item.id}`}>
              Saiba mais
            </Link>
            <div className="comments">
              <span>Comments </span>
              <span className="span-count"> ({item?.vote_count})</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export { CardFilms };
