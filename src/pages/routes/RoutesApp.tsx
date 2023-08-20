import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../app/home';
import { Filmes } from '../app/filmes';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';





export default function RoutesApp() {
  
  return (
    <BrowserRouter>
     <Header />
        <Routes>
        
            <Route path='/' element={ <Home/> } />
            
            <Route path='/filme/:id' element={ <Filmes /> } />
        
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}