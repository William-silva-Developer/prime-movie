import axios from "axios";


//https://api.themoviedb.org/3/movie/now_playing?api_key=882912fe9d652cd4f85d0b891f794e4a


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export { api };