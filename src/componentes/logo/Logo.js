import logoBC from '../../imagens/logo-bc2.png';
import './Logo.css';
import React from 'react';

function LogoBurguer(){
 return(
   <header className="logoburger">
       <img src={logoBC} alt = "logo-burger-cafe"/>
   </header>
   
 )

}

export default LogoBurguer;