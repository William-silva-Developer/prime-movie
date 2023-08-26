import React, { useEffect, useState } from "react";
import { Header } from "../../../components/header";

import { RootState } from "../../../store/rootReducer";

import { useSelector, useDispatch } from "react-redux";

import "./Home.css";
import { getFilms } from "../../../store/getFilm/getFilmSlice";
import { Link } from "react-router-dom";
import { CardFilms } from "../../../components/listFilms";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: RootState) => state.films.results.loading
  );
  const arrFilms = useSelector(
    (state: RootState) => state.films.results.ObjctFilms
  );

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Carregando. Aguarde...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="content-title">
        <h2>Seus filmes prediletos você só encontra aqui!</h2>
      </div>

      <div className="films-in-zoom">
        {arrFilms.map((item) => {
          return (
            <article key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                alt={item?.title}
              />
            </article>
          );
        })}
      </div>

      <main>
        <CardFilms />
      </main>
    </div>
  );
};

export { Home };
