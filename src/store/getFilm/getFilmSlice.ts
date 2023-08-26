import { createSlice } from "@reduxjs/toolkit";

export interface Params {
  loading: boolean;
  requestFailure: boolean;
  requestTimeout: boolean;
  requestNull: boolean;
  ObjctFilms: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [number, number, number, number, number];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
}

const initialState: { results: Params } = {
  results: {
    loading: false,
    requestFailure: false,
    requestTimeout: false,
    requestNull: false,
    ObjctFilms: [
      {
        adult: true,
        backdrop_path: "",
        genre_ids: [0, 0, 0, 0, 0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
  },
};

const GetFilmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    getFilms: (state) => {
      state.results.loading = true;
    },
    getFilmsSuccess: (state, action) => {
      state.results.loading = false;
      state.results.ObjctFilms = action.payload;
    },
    getFilmsTimeout: (state) => {
      state.results.loading = false;
      state.results.requestTimeout = true;
    },
    getFilmsNull: (state) => {
      state.results.requestNull = true;
      state.results.loading = false;
    },
    getFilmsFailure: (state) => {
      state.results.loading = false;
      state.results.requestFailure = true;
    },
  },
});

export const {
  getFilms,
  getFilmsFailure,
  getFilmsSuccess,
  getFilmsTimeout,
  getFilmsNull,
} = GetFilmsSlice.actions;

export default GetFilmsSlice.reducer;
