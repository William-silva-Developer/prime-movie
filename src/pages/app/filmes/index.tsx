import React from "react";
import { useParams } from "react-router-dom";

import "./Filmes.css";

import { datailsFilm } from "../../../store/DatailsFilm/DatailsFilmSlice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/rootReducer";

const Filmes: React.FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.datailsMovie.loading);
  const requestError400 = useSelector(
    (state: RootState) => state.datailsMovie.requestError400
  );
  const ObjctDatailsFilm = useSelector(
    (state: RootState) => state.datailsMovie.ObjctDatailsFilm
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDatailsFilm = () => {
    dispatch(datailsFilm(id));
  };

  React.useEffect(() => {
    if (id) {
      handleDatailsFilm();
    }
  }, [handleDatailsFilm, id]);

  React.useEffect(() => {}, [requestError400]);

  return (
    <div>
      <p>Filmes: {id}</p>

      <div>
        <article>
          <img
            src={`https://image.tmdb.org/t/p/original/${ObjctDatailsFilm?.backdrop_path}`}
            alt={ObjctDatailsFilm?.title}
          />
        </article>
      </div>
    </div>
  );
};

export { Filmes };
