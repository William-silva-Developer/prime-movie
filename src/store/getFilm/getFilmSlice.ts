import { createSlice } from "@reduxjs/toolkit";


export interface Params {
    loading: boolean;
    requestFailure: boolean;
    requestTimeout: boolean;
    requestNull: boolean;
    
}

const initialState: { results: Params } = {
    
    results:{
    
        loading: false,
        requestFailure: false,
        requestTimeout: false,
        requestNull: false
    }
} 

const GetFilmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        getFilms: ( state ) => {
            
            state.results.loading = true;
        
        },
        getFilmsSuccess: ( state ) => {
        
            state.results.loading = false;
        
        },
        getFilmsTimeout: ( state ) => {
            
            state.results.loading = false;
            state.results.requestTimeout = true;
        },
        getFilmsNull: ( state ) => {
            
            state.results.requestNull = true;
            state.results.loading = false;
        
        },
        getFilmsFailure: ( state ) => {
        
        state.results.loading = false;
        state.results.requestFailure = true;
        
        }
    }
});

export const { getFilms, getFilmsFailure, getFilmsSuccess, getFilmsTimeout, getFilmsNull } = GetFilmsSlice.actions;

export default GetFilmsSlice.reducer;

