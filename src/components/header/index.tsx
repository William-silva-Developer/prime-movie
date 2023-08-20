import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export  function Header() {
  return (
    
  <header>
     
      
      <div className='logo'>
      
          <Link  to={'/'}>
          
            <img src={require("../../assets/logotipo2.png")} />
            
          </Link>
          <nav>
           
              <Link className='btn-button' to={'/'} >Home</Link>
              <Link className='btn-button' to={'/favoritos'} >Meus filmes</Link>
              <Link className='btn-button' to={'/sobre'} >Sobre</Link>
         
          </nav>
          
      </div>
      
      <div className='title'>
            
        <div>
          
          <h1>Prime Movie</h1>
          <p>Aqui você encontrar seu filme favorito</p>
          <button className='btn'>Saiba mais</button>
        </div>
        
          
      </div>
                
  </header>
  )
}