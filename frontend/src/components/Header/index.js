import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import home from '../../assets/home.svg';
import search from '../../assets/search.svg';

export default function Header() {
  return(
   <Container>
    <div>
     <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
      </div> 
      
     <div className="search">
       <img src={search} alt="search"/>
       <input type="text" placeholder="Pesquisar"/>
     </div>

     <div className="icons">
      <Link to="/">
        <img src={home} alt="home"/>
      </Link>

      <Link to="/new">
        <img src={camera} alt="camera"/>
      </Link>

     </div>
    </div>
   </Container>
  )
}
