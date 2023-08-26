import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DatailsFim {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: number;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//----------------------------------------------------------------

const initialState = {
  loading: false,
  requestError: false,
  requestError400: false,
  requestError500: false,
  requestError503: false,
  ObjctNull: false,
  ObjctDatailsFilm: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: 0,
    },
    budget: 0,
    genres: [
      {
        id: 0,
        name: "",
      },
    ],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: "",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "",
        name: "",
      },
    ],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [
      {
        english_name: "",
        iso_639_1: "",
        name: "",
      },
    ],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
};

export const DatailsFilmSlice = createSlice({
  name: "datails",
  initialState,
  reducers: {
    datailsFilm: (state, action) => {
      state.loading = true;
    },

    datailsFilmSucess: (state, action: PayloadAction<DatailsFim>) => {
      state.loading = false;

      state.ObjctDatailsFilm = action.payload;
    },
    datailsFilmNull: (state) => {
      state.ObjctNull = true;
      state.loading = false;
    },

    datailsFilmFailure: (state, action) => {
      state.loading = false;
      const status = action.payload;

      if (status === 404) {
        state.requestError400 = true;
      } else if (status === 500) {
        state.requestError500 = true;
      } else if (status === 503) {
        state.requestError503 = true;
      }
    },
    changeValuesDatailsFilm: (state) => {
      state.requestError = false;
      state.requestError400 = false;
      state.requestError500 = false;
      state.requestError503 = false;
      state.ObjctNull = false;
    },
  },
});

export const {
  changeValuesDatailsFilm,
  datailsFilm,
  datailsFilmFailure,
  datailsFilmSucess,
} = DatailsFilmSlice.actions;
export default DatailsFilmSlice.reducer;
