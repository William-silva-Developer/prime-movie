import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type ParamsFilms = 
    [
      {  adult: boolean,
        backdrop_path: string,
        genre_ids: [
            number,
            number,
            number,
            number,
            number
        ],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }


    ]



const initialState: {results: ParamsFilms} = {

    results: 
        [
            {
            adult: false,
            backdrop_path: "",
            genre_ids: [
                0,
                0,
                0,
                0,
                0
            ],
            id: 976573,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            release_date: "",
            title: "",
            video: false,
            vote_average: 0,
            vote_count: 0
        }
        ]
}


const ShowFilmsSlice = createSlice({
    
    name: "showFilms",
    initialState,
    reducers: {
        
        showFilm: ( state, action ) => {
            
            state.results = action.payload
            
        },
    
    },
});

export const { showFilm } = ShowFilmsSlice.actions;
export default ShowFilmsSlice.reducer;