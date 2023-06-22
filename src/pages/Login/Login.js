import React from 'react';
import './Login.css';
import Formulario from '../../componentes/Formulario/Formulario.js';
import LogoBurguer from '../../componentes/logo/Logo.js';



function Login() {
  return (
    <div className="App">
      <LogoBurguer />
      <Formulario />
      
    </div>
  );
}

export default Login;