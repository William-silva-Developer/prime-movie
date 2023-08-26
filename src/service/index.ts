import axios from "axios";


//https://api.themoviedb.org/3/movie/now_playing?api_key=


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export { api };