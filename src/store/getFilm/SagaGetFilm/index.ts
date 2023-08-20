import { all, put, takeLatest, call, delay, race } from 'redux-saga/effects';
import { api } from '../../../service';
import { getFilmsFailure, getFilmsNull, getFilmsSuccess, getFilmsTimeout } from '../getFilmSlice';
import { showFilm } from '../../showFilms/ShowFilmsSlice';


function* getFilms () {
    
    try {
        
        const { res, timout } = yield race({
        
            res: call(api.get, '/movie/now_playing?',{
                params:{
                    api_key: '882912fe9d652cd4f85d0b891f794e4a',
                    language: "pt-BR",
                    page: 1,
                },
                headers: {
                    "Content-Type": "application/json"
                },
                
            }),
            timout: delay(32000)
        });
    
        
        
        if ( timout ) {
        
            yield put(getFilmsTimeout());
        };
        
        if ( res.data.length === 0 ) {
            
            yield put(getFilmsNull());
        };
        
        if ( res.data ) {
        
            yield put(showFilm(res.data.results));
            yield put(getFilmsSuccess());
            
            
        }
        
    } catch ( error: any ) {
    
        yield put(getFilmsFailure());
        
    }
    
};

export default all([takeLatest("films/getFilms", getFilms )]);